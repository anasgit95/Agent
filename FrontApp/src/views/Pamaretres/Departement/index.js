import React,{useState,useEffect,useRef}  from "react";
import { Table,  Popconfirm ,Input , Space
} from 'antd';
import {

  Card,

} from "shards-react";
  import Spinner from '../../../components/SpinnerLoading/index'
 import { Container, Row, Button,Col, } from "shards-react";
 import {GET_DEPARTMENT} from '../../../actions/queries'
import PageTitle from "../../../components/common/PageTitle";
import { SearchOutlined,StopOutlined } from '@ant-design/icons';

  import { useQuery } from '@apollo/client';
  import Highlighter from 'react-highlight-words';

 import AddDepartement from "./AddDepartement";
import get from "lodash.get";
import isequal from "lodash.isequal";
import ModifierDepartement from './ModifierDepartement'
import { useToasts } from 'react-toast-notifications';
import { EDIT_DEPARTMENT } from '../../../actions/mutations'
import { useMutation } from '@apollo/client';

 export default (props) => {
  const { addToast } = useToasts();

    const [openModal, setOpeModal] = useState(false);
    const { loading, error, data } = useQuery(GET_DEPARTMENT);
    const [dataSource, setDatasource] = useState(0);
    const searchInput = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [openModalUpdate, setOpeModalUpdate] = useState(false);
    const [updateItem, setUpdatedItem] = useState(null);

  const update = (record) => {
            setUpdatedItem(record)
            setOpeModalUpdate(true)

    };
    const [EDITFAMILY] = useMutation(EDIT_DEPARTMENT, {
      update(cache, { data: { editDepartment } }) {
          try { 
               const data = cache.readQuery({
                  query: GET_DEPARTMENT,
              });

               let NewIndex = data.fetchDepartments.findIndex((item) => item._id.toString() === editDepartment._id.toString())
               if (NewIndex > -1)
               data.fetchDepartments.splice(NewIndex, 1)

               // if(data.fetchFamilies===undefined)
              // data.fetchFamilies=[]
              //  data.fetchFamilies.unshift(addFamily)

              // cache.writeQuery({
              //     query: GET_FAMILY,
              //     data: data
              // });
              //  addToast("Département  ajouter", { appearance: 'success' });
              cache.writeQuery({
                query: GET_DEPARTMENT,
                data: data
            });


              // addToast("Client ajouter", { appearance: 'success' });
          }
          catch (error) {
              console.log(error)
              addToast(error.message, { appearance: 'warning' });
          }
      }
  });
    const Delete= async(record)=>{
      record.Active=false
     record.Deleted=true
     delete record.Modifier;
     delete record.__typename;

    
     await EDITFAMILY({ variables: { input: record } }).then(({ data }) => {
          // props.history.push('/dashboard')
     })
         .catch(e => {
             console.log(e)           
              addToast(e.message, { appearance: 'warning' });

         })
  }
    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
      };
    
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
      };

    useEffect(() => {
        console.log("statte",data)
        if(data)
        setDatasource(data)
      }, [data]); 

      useEffect(() => {
     

      }, ); 
const text= "Êtes-vous sûr de vouloir supprimer? "
//   const { loading, error, data } = useQuery(GET_CUSTOMERS);

 
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

          placeholder={`Recherche Par ${dataIndex.includes('Designation') ? "Designation"
       
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
            Chercher
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
        title: '',
        dataIndex: '',
        //  key: 'Email',
        width: 30,
        render: (dataIndex, record,index) =>
  
          <div >
            <span > {(index+1)} </span>
  
          </div>
  
      },
    {
      title: 'Désignation',
      dataIndex: 'Designation',
      //  key: 'Email',
      width: 180,
     ...getColumnSearchProps('Designation'),
      render: (dataIndex, record) =>

        <div >
          <span > {(record.Designation)} </span>

        </div>

    },
  
    {
      title: 'Description',
      dataIndex: 'Description',
      //  key: 'Phone',
      width: 130,

    },
    {
        title: 'Status',
        dataIndex: 'Active',
        //  key: 'Phone',
        width: 130,
  
      },
    {
      title: 'Actions',
      dataIndex: '_id',
   //   key: '_id',
      width: 180,
      // fixed: 'right',

      render: (dataIndex, record) =>
      <Row > 
      <Col   sm="12" lg="5" > 
        <div > 
              <button  className="profil" onClick={()=>update(record)}  >
                 Modifier 
              
              </button>           
  
        </div>  
        </Col>
  
        <Col   sm="12" lg="5" > 
  
                 <Popconfirm
                  title={text}
                  icon={<StopOutlined style={{color:"red",
                 fontSize:16
   
                }} />}
                onConfirm={() => Delete(record)}
                  // onCancel={cancel}
                  placement="right"
                  okText="Oui"
                  cancelText="Non"
                >
  
                <button  className="bloquer"  >
                Supprimer 
              
              </button>    
                </Popconfirm>
                </Col>
  
   
            </Row>
   
 
    },

  ];
  if (loading) return <Spinner />;

  if (error) return `Error! ${error.message}`;
  return (

    <Container fluid className="main-content-container px-4"> 
        {openModalUpdate && updateItem  ?
         <ModifierDepartement   
         data={updateItem}
     openModal={openModalUpdate} setOpeModal={setOpeModalUpdate}/> 
     :null
     
    
    }
  
  <AddDepartement   
  openModal={openModal} setOpeModal={setOpeModal}/>
     <Row noGutters className="page-header py-4">
        <PageTitle sm="6" title="" subtitle="Liste des départements" className="text-sm-left" />

        <Button style={{ height: 40 }} onClick={() => setOpeModal(true)} theme="accent" size="sm" className="ml-auto"  >
            <i className="material-icons">library_add</i> Ajouter un département
  </Button>
    </Row>
    <Card>

    <Table dataSource={dataSource? dataSource.fetchDepartments :[]} columns={columns} rowKey='_id'

scroll={{   y: 800 }}

/>
     

    </Card>

</Container>
   
  )
}
