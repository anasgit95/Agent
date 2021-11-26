import React, { useRef, useState,useEffect} from "react";
import { Table, Input, Space, Badge, Row, Col,Popconfirm } from 'antd';
import {

  Card

} from "shards-react";
 import Spinner from '../../../components/SpinnerLoading/index'
 
import {Link } from 'react-router-dom'
import { Button } from "shards-react";
import { SearchOutlined,StopOutlined } from '@ant-design/icons';
import get from "lodash.get";
import isequal from "lodash.isequal";
// import { Link } from "react-router-dom";
 import Moment from 'moment';
 import { useMutation } from '@apollo/client';
 import {BANNIR_USER} from '../../../actions/mutations'

import Highlighter from 'react-highlight-words';
import { useToasts } from 'react-toast-notifications';
import CardView from './CarViewMonteur'
import axios from '../../../utils/Api'
export default (props) => {
 
  const { addToast } = useToasts();

const text= "Êtes-vous sûr de vouloir bloquer ce compte ? "
const textActive= "Êtes-vous sûr de vouloir activer ce compte ? "
const [loading, setLoading] = useState(true);
useEffect(() => {
  axios.get('/evaluation').then(response=>
{    

 
   setLoading(false)
  setData(response.data)
}   
  )
  // Update the document title using the browser API
 },[]);
const [data, setData] = useState([]);

   const [BANNIRUSER] = useMutation(BANNIR_USER, {
    update(cache, { data }) {
        try {
   
          
        }
        catch (error) {
            console.log(error)
            // addToast(error.message, { appearance: 'warning' });
        }
    }
});
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



  const RemoveItem =async (item)=>{
    item.Active=false
    item.Deleted=true
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

          placeholder={`Recherche Par ${dataIndex.includes('fullAdress') ? "Adresse"
            : dataIndex.includes('postalCode') ? "Code Postal"
              : dataIndex.includes('city') ? "Ville"
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
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
                </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
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
      title: 'Agent',
      // dataIndex: this.state.usersList.activePicture,
      // key: this.state.usersList.identity,
      width: 120,
      fixed: 'left',
      //  key: 'ActivePicture',
      dataIndex: 'picture',
      ...getColumnSearchProps('Creator.FirstName'),
      render: (dataIndex, record) =>


      <div  >
      {dataIndex !== null &&
        dataIndex !== "" ?  
        <Row>
          {/* <Col span={8}>
            {(
              <Badge color={!record.Active ? "red" :"green"}>
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
          </Col> */}
          <Col span={16}>

            <Link to={"/Monteur/Modifier/" + record._id} key={record._id}>  
              <span style={{color:"black", display: "block", cursor: "pointer", marginLeft: 10,marginTop:10 }} > {" " + record.Creator.FirstName + " " + record.Creator.LastName + "  "}</span>

         </Link>  
          </Col>

        </Row>
         :null}
        
           

        </div>
 
    },

    {
      title: 'Client',
      dataIndex: 'Client',
      //  key: 'Email',
      width: 100,
      // ...getColumnSearchProps('Email'),
      render: (dataIndex, record) =>

        <div >
          <span > {(record.generaliter.fullName)} </span>

        </div>

    },
    {
      title: 'Téléphone',
      dataIndex: 'agent',
      //  key: 'Email',
      width: 100,
      // ...getColumnSearchProps('Email'),
      render: (dataIndex, record) =>

        <div >
          <span > {(record.Creator.Phone1)} </span>

        </div>

    },
    {
      title: 'Adresse Client',
      dataIndex: 'Client',
      //  key: 'Email',
      width: 100,
      // ...getColumnSearchProps('Email'),
      render: (dataIndex, record) =>

        <div >
          <span > {(record.generaliter.adresse)} </span>

        </div>

    },
    
    {
      title: 'Date de visite',
      dataIndex: 'ContractDate',
      //  key: 'Email',
      width: 120,
      render: (dataIndex, record) =>

        <div >
          <span > {(Moment(record.createdAt).format('DD/MM/YYYY'))} </span>

        </div>

    },   
 
    {
      title: 'Actions',
      dataIndex: '_id',
   //   key: '_id',
      width: 130,
      // fixed: 'right',

      render: (dataIndex, record) =>
        <div className="actionsIcon">
          <div className="demo">
        <Link to={"/Projets/" + record._id} key={record._id}>  
            <button  className="profil"  >
               Voir 
            
            </button>           
            </Link>

            
     
       
      
           
 
          </div>
        </div>

    },

  ];
  if (loading) return <Spinner />;

   
  return (
    <> 
    <div className="hideCard"  > 
    {data.map(data=> 
    // <Link to={"/Monteur/Modifier/" + data._id} key={data._id}> 
          <CardView data={data} key={data._id}  history={props.history} RemoveItem={RemoveItem} activate={activate}/>
// </Link> 
      
      )}
    </div>
    <Card>
      <Table className="tableAntd" dataSource={data} columns={columns} rowKey='_id'

        scroll={{   y: 800 }}

      />

    </Card>
    </>
   
  )
}
