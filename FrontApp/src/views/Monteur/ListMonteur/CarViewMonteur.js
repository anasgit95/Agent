import React from "react";
import {
  Card,
  CardTitle,
   CardBody,
  //  Button
} from "shards-react";
import { Menu, Dropdown,Popconfirm  } from 'antd';
  import {  StopOutlined } from '@ant-design/icons';

const text= "Êtes-vous sûr de vouloir bloquer ce compte ? "
const textActive= "Êtes-vous sûr de vouloir activer ce compte ? "
export default function BasicCardExample({ data,RemoveItem ,activate,history}) {
    
  const menu = (
    <Menu>
      <Menu.Item onClick={()=>history.push("/Monteur/Modifier/" + data._id)}>
         <i  style={{color:"rgb(152,212,156)"}} className="material-icons ">settings</i>
 
       <span style={{fontWeight:"bold",color:"rgb(152,212,156)"}}>  Modifier</span>
 
       </Menu.Item>
      <Menu.Item>
        
  {data.Active?
        <Popconfirm
        title={text}
        icon={<StopOutlined style={{color:"red",
       fontSize:16

      }} />}
      onConfirm={() => RemoveItem(data)}
        // onCancel={cancel}
        placement="topLeft"
        okText="Oui"
        cancelText="Non"
      >

       <i   style={{fontWeight:"bold",color:"#F3ABAB"}} className="material-icons ">block</i>
        <span style={{fontWeight:"bold",color:"#F3ABAB"}}>  Bloquer</span> 
    
       </Popconfirm>
      :<Popconfirm
      title={textActive}
      icon={<StopOutlined style={{color:"red",
     fontSize:16

    }} />}
    onConfirm={() => activate(data)}
      // onCancel={cancel}
      placement="right"
      okText="Oui"
      cancelText="Non"
    >
   <i   style={{fontWeight:"bold",color:"#F3ABAB"}} className="material-icons ">block</i>
        <span style={{fontWeight:"bold",color:"#F3ABAB"}}>  Débloquer</span> 
   
    </Popconfirm>  
}
       </Menu.Item>
   
    </Menu>
  );
  return (
    <Card className="cardpicture"
    >
      <img
      alt='test'
        style={{

          height: 80,
          width: 80,
          borderRadius: "50%",
          top: -53,
          left: "35%",
          position: "absolute",
          boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px "

        }} src="https://i.stack.imgur.com/l60Hf.png" />


      <CardBody>
        <div className="toggleCss" > 
        <Dropdown overlay={menu} placement="bottomLeft">
        <i  className="material-icons ">more_vert</i>
</Dropdown>
         </div>
        <CardTitle>{data.FirstName + "  " + data.LastName}</CardTitle>
        <p>{data.Email}</p>
        <p>{data.Phone1}</p>

        {/* <Button>Voir profil &rarr;</Button> */}
      </CardBody>
    </Card>
  );
}