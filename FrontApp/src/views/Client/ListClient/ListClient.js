import React, { useRef, useState } from "react";
import { Table, Input, Space, Badge, Row, Col,Popconfirm } from 'antd';
import { Card } from "shards-react";
import { GET_CUSTOMERS } from '../../../actions/queries'
import Spinner from '../../../components/SpinnerLoading/index'
import { useQuery } from '@apollo/client';
import { Button } from "shards-react";
import { SearchOutlined,StopOutlined } from '@ant-design/icons';
import get from "lodash.get";
import isequal from "lodash.isequal";
  // import Moment from 'moment';
import Highlighter from 'react-highlight-words';
import './style.css'
import List from '../../../HooksApi/'
import {Link} from 'react-router-dom'
import { useToasts } from 'react-toast-notifications';
import { useMutation } from '@apollo/client';
import {BANNIR_USER} from '../../../actions/mutations'
export default () => {


  const { addToast } = useToasts();

const text= "Êtes-vous sûr de vouloir bloquer ce compte ? "
const textActive= "Êtes-vous sûr de vouloir activer ce compte ? "



  const { loading, error, data } = useQuery(GET_CUSTOMERS);
  const{arrayOfFamily,arrayCategorie,arrayDepartement} =List()

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };
  const [BANNIRUSER] = useMutation(BANNIR_USER, {
    update(cache, { data: { banishUser } }) {
        try {
            const data = cache.readQuery({
                query: GET_CUSTOMERS,

            });
                
            let NewIndex = data.fetchCustomers.findIndex((item) => item._id.toString() === banishUser._id.toString())
            if (NewIndex > -1)
            data.fetchCustomers.splice(NewIndex, 1)
             cache.writeQuery({
              query: GET_CUSTOMERS,
              data: data
          });
          
        }
        catch (error) {
            console.log(error)
            // addToast(error.message, { appearance: 'warning' });
        }
    }
});
const RemoveItem =async (item)=>{
  item.Active=false
  item.Deleted=false
  delete item.Modifier;
  delete item.__typename;
     await BANNIRUSER({ variables: { id: item._id } }).then(({ data }) => {

       // props.history.push('/dashboard')
   })
       .catch(e => {
           addToast(e.message, { appearance: 'warning' });


       })
 }
 const activate =async (item)=>{
  item.Active=true
  item.Deleted=false

   delete item.Modifier;
  delete item.__typename;
     await BANNIRUSER({ variables: { id: item._id } }).then(({ data }) => {

       // props.history.push('/dashboard')
   })
       .catch(e => {
           addToast(e.message, { appearance: 'warning' });


       })
 }
 
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input

          ref={searchInput}

          placeholder={`Recherche par ${dataIndex.includes('fullAdress') ? "Adresse"
            : dataIndex.includes('Family') ? "Famille"
              : dataIndex.includes('Email') ? "Email"
                : dataIndex.includes('country') ? "Pays"
                  : dataIndex.includes('Sector') ? "Profession"
                    : dataIndex.includes('FirstName') ? "Nom"
                      : ""}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 210, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 100 }}
          >
            Chercher
                </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 100 }}
          >
            Réinitialiser

                </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => {
      if (get(record, dataIndex) !== undefined && get(record, dataIndex) !== null)
        return get(record, dataIndex)
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select());
      }
    },
    render: text => {
      return isequal(searchedColumn, dataIndex) ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : null}
        />
      ) : (
        text
      );
    }
  });
 
  const columns = [
    {
      title: 'Profile',
      // dataIndex: this.state.usersList.activePicture,
      // key: this.state.usersList.identity,
      width: 200,
      fixed: 'left',
      //  key: 'ActivePicture',
      dataIndex: 'picture',
      ...getColumnSearchProps('FirstName'),
      render: (dataIndex, record) =>


        <div  > 
 

           {dataIndex !== null &&
            dataIndex !== "" ?  
            <Row>
              <Col span={8}>
                {(
                  <Badge color={arrayCategorie.filter(item=>item.value===record.Category)[0]?arrayCategorie.filter(item=>item.value===record.Category)[0].Color :"black"}>
                           <img
                  style={{
                    borderRadius: "50%",
                    height: 50,
                    width: 50,
                    marginRight: 10
                  }}
                  src={
                    record.Picture?record.Picture:
                    "https://i.stack.imgur.com/l60Hf.png  "                
                  }
                  ariarole="presentation"
                  loading="lazy"
                  alt="dd"
                  className="discover-entity-type-card__image-circle Elevation-0dp EntityPhoto-circle-7"
                />
                  </Badge>)  
                }
              </Col>
              <Col span={16}>

                {/* <Link to={"/userInfo/" + record.Identity} key={record.Identity}> */}
                  <span style={{color:record.Active?null:"red",  display: "block", cursor: "pointer", marginLeft: 10,marginTop:10 }} > {" " + record.FirstName + " " + record.LastName + "  "}</span>

                {/* </Link> */}
              </Col>

            </Row>
             :null}
            
               

            </div>


 



     },

    {
      title: 'Famille',
      dataIndex: 'Family',
      //  key: 'Phone',
      width: 110,
 
      filters: arrayOfFamily,
      onFilter: (value, record) => record && record.Family != null ? record.Family.toString()===value.toString()  : null,
      render: (dataIndex, record) =>
 
      <div >
        <span style={{color:record.Active?null:"red"}} > { (arrayOfFamily.filter(item=>item.value===record.Family)[0])!==undefined? arrayOfFamily.filter(item=>item.value===record.Family)[0].label :null  } </span>

      </div>

    },
    
  
    {
      title: 'Département',
      dataIndex: 'Department',
      //  key: 'Phone',
      width: 120,
      filters: arrayDepartement,
      onFilter: (value, record) => record && record.Department != null ? record.Department.toString()===value.toString()  : null,
     

      render: (dataIndex, record) =>

      <div >
        <span style={{color:record.Active?null:"red"}} > { (arrayDepartement.filter(item=>item.value===record.Department)[0])!==undefined? arrayDepartement.filter(item=>item.value===record.Department)[0].label :null  } </span>

      </div>
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      //  key: 'Email',
      width: 180,
     ...getColumnSearchProps('Email'),
      render: (dataIndex, record) =>

        <div >
          <span style={{color:record.Active?null:"red"}}> {(record.Email)} </span>

        </div>

    },
    {
      title: 'Télephone 1',
      dataIndex: 'Phone1',
      //  key: 'Phone',
      width: 130,
      render: (dataIndex, record) =>

      <div >
        <span style={{color:record.Active?null:"red"}}> {(record.Phone1)} </span>

      </div>

    },
    {
      title: 'Télephone 2',
      dataIndex: 'Phone2',
      //  key: 'Phone',
      width: 130,
      render: (dataIndex, record) =>

      <div >
        <span style={{color:record.Active?null:"red"}}> {(record.Phone2)} </span>

      </div>
    },
 
    {
      title: 'Actions',
      dataIndex: '_id',
   //   key: '_id',
      width: 110,
       fixed: 'right',

      render: (dataIndex, record) =>
        <div className="actionsIcon">
          <div className="demo">
              <Link to={"/client/Modifier/" + record._id} key={record._id} >   
            <button  className="profil"  >
               Modifier 
            
            </button>           
            
       </Link>  

        {record.Active? 
        <Popconfirm
        title={text}
        icon={<StopOutlined style={{color:"red",
       fontSize:16

      }} />}
      onConfirm={() => RemoveItem(record)}
        // onCancel={cancel}
        placement="right"
        okText="Oui"
        cancelText="Non"
      >

      <button  className="bloquer"  >
      Bloquer 
    
    </button>    
      </Popconfirm>
      :<Popconfirm
      title={textActive}
      icon={<StopOutlined style={{color:"red",
     fontSize:16

    }} />}
    onConfirm={() => activate(record)}
      // onCancel={cancel}
      placement="right"
      okText="Oui"
      cancelText="Non"
    >

    <button  className="bloquer"  >
    Débloquer 
  
  </button>    
    </Popconfirm>
      
      
      }
               
          
 
          </div>
        </div>

    },

  ];
  if (loading) return <Spinner />;

  if (error) return `Error! ${error.message}`;
  return (
    <Card>
      <Table dataSource={data.fetchCustomers} columns={columns} rowKey='_id'

        scroll={{   y: 800 }}

      />

    </Card>
  )
}
