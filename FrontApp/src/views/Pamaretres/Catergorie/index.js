import React,{useState}  from "react";
import { Table,  Popconfirm } from 'antd';
import {

  Card

} from "shards-react";
  import Spinner from '../../../components/SpinnerLoading/index'
 import { Container, Row, Button,Col } from "shards-react";
 import {GET_CATEGORIES} from '../../../actions/queries'
import PageTitle from "../../../components/common/PageTitle";

 import { StopOutlined } from '@ant-design/icons';
 import { useQuery } from '@apollo/client';

 import AddCategorie from "./AddCategorie";
import {EDIT_GATEGORIE} from '../../../actions/mutations'
import { useMutation } from '@apollo/client';
import { useToasts } from 'react-toast-notifications';
import ModifierCategorie  from './ModifierCategorie'
 export default (props) => {
  const { addToast } = useToasts();

    const [openModal, setOpeModal] = useState(false);
    const { loading, error, data,refetch } = useQuery(GET_CATEGORIES);
    const [openModalUpdate, setOpeModalUpdate] = useState(false);
    const [updateItem, setUpdatedItem] = useState(null);

  const update = (record) => {
            setUpdatedItem(record)
            setOpeModalUpdate(true)

    };
    const [DELETEGATEGORIE] = useMutation(EDIT_GATEGORIE, {
      update(cache, { data: { editCategory } }) {
          try {
              const data = cache.readQuery({
                  query: GET_CATEGORIES,

              });
                  
              let NewIndex = data.fetchCategories.findIndex((item) => item._id.toString() === editCategory._id.toString())
              if (NewIndex > -1)
              data.fetchCategories.splice(NewIndex, 1)
               cache.writeQuery({
                query: GET_CATEGORIES,
                data: data
            });
            
          }
          catch (error) {
              console.log(error)
              addToast(error.message, { appearance: 'warning' });
          }
      }
  });

const text= "Êtes-vous sûr de vouloir bloquer ce compte ? "
//   const { loading, error, data } = useQuery(GET_CUSTOMERS);

 


   const RemoveItem =async (item)=>{
    item.Active=false
    item.Deleted=true
    delete item.Modifier;
    delete item.__typename;
       await DELETEGATEGORIE({ variables: { input: item } }).then(({ data }) => {
  
         // props.history.push('/dashboard')
     })
         .catch(e => {
             addToast(e.message, { appearance: 'warning' });

 
         })
   }

  const columns = [
  

    {
      title: 'Désignation',
      dataIndex: 'Designation',
        key: 'Designation',
      width: 180,
       render: (dataIndex, record) =>

        <div >
          <span style={{color:record.Color,fontWeight:"bold"}}> {(record.Designation)} </span>

        </div>

    },
  
    {
      title: 'Description',
      dataIndex: 'Description',
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
                 onConfirm={() => RemoveItem(record)}
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
        <ModifierCategorie   
        data={updateItem}
    openModal={openModalUpdate} setOpeModal={setOpeModalUpdate}/> 
    :null
    
   
   }
   <AddCategorie openModal={openModal} setOpeModal={setOpeModal} refetch={refetch}/>
     <Row noGutters className="page-header py-4">
        <PageTitle sm="6" title="" subtitle="Liste des categories" className="text-sm-left" />

        <Button style={{ height: 40 }} onClick={() => setOpeModal(true)} theme="accent" size="sm" className="ml-auto"  >
            <i className="material-icons">library_add</i> Ajouter une catégorie
  </Button>
    </Row>
    <Card>
      <Table dataSource={data.fetchCategories} columns={columns} rowKey='_id'

        scroll={{   y: 800 }}

      />

    </Card>

</Container>
   
  )
}
