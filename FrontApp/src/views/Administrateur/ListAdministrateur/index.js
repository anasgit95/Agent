import React, {   useRef, useState } from "react";
import { Table, Input, Space, Badge, Row, Col  } from 'antd';
import {

  Card

} from "shards-react";
import { GET_ADMINS } from '../../../actions/queries'
import Spinner from '../../../components/SpinnerLoading/index'
import { useQuery } from '@apollo/client';


import { Button } from "shards-react";
import { SearchOutlined   } from '@ant-design/icons';
import get from "lodash.get";
import isequal from "lodash.isequal";
 import CardView from './CardProfile'
// import Moment from 'moment';
import {Link } from 'react-router-dom'
import Highlighter from 'react-highlight-words';
import ImageToShow from '../../../HooksApi/ImageHooksApi'
   export default () => {



// const text= "Êtes-vous sûr de vouloir bloquer ce compte ? "
  const { loading, error, data } = useQuery(GET_ADMINS);

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



  // const yearsDiff = (d1, d2) => {
  //   let date1 = new Date(d1);
  //   let date2 = new Date(d2);
  //   let yearsDiff = date1.getFullYear() - date2.getFullYear();
  //   return yearsDiff;
  // }

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
      title: 'Profile',
      // dataIndex: this.state.usersList.activePicture,
      // key: this.state.usersList.identity,
      width: 200,
      fixed: 'left',
      //  key: 'ActivePicture',
      dataIndex: 'picture',
      ...getColumnSearchProps('FirstName'),
      render: (dataIndex, record) =>


    {  
      const {  base64String } = ImageToShow("admins/"+record.Picture)
     return <div  >
      {dataIndex !== null &&
        dataIndex !== "" ?  
        <Row>
          <Col span={8}>
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
                    record.Picture?`data:image/png;base64,${base64String}` :
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

           <Link to={"/user-profile/" + record._id} key={record._id}>  
              <span style={{color:"black", display: "block", cursor: "pointer", marginLeft: 10,marginTop:10 }} > {" " + record.FirstName + " " + record.LastName + "  "}</span>

          </Link>  
          </Col>

        </Row>
         :null}
        
           

        </div>}
    },

    {
      title: 'Email',
      dataIndex: 'Email',
      //  key: 'Email',
      width: 180,
      // ...getColumnSearchProps('Email'),
      render: (dataIndex, record) =>

        <div >
          <span > {(record.Email)} </span>

        </div>

    },
    // {
    //   title: 'Age',
    //   dataIndex: 'Birthday',
    //   //key: 'Birthday',
    //   width: 80,
    //   //...getColumnSearchProps('birthday'),
    //   sorter: (a, b) => Moment(a.Birthday).unix() - Moment(b.Birthday).unix(),
    //   render: (dataIndex, record) =>

    //     <div className="dataShow" >
    //       <span > {yearsDiff(new Date(), dataIndex)} </span>
    //     </div>
    // },

    {
      title: 'Télephone 1',
      dataIndex: 'Phone1',
      //  key: 'Phone',
      width: 130,

    },
    {
      title: 'Télephone 2',
      dataIndex: 'Phone2',
      //  key: 'Phone',
      width: 130,

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
          <Link to={"/user-profile/" + record._id} key={record._id}>  
            <button  className="profil"  >
                Profil 
            
            </button>           
            
      </Link> 

 
 
          </div>
        </div>

    },

  ];
  if (loading) return <Spinner />;

  if (error) return `Error! ${error.message}`;
  return (
    <> 
    <div className="hideCard"  > 
    {data.fetchAdmins.map(data=> 
          <CardView data={data} key={data._id}/>

      
      )}
    </div>
     <Card>
      <Table className="tableAntd" dataSource={data.fetchAdmins} columns={columns} rowKey='_id'

        scroll={{   y: 800 }}

      />

    </Card>
    </>
  )
}
