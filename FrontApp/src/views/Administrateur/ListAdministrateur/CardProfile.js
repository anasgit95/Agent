import React from "react";
import {
  Card,
  CardTitle,
   CardBody,
 } from "shards-react";
import { Menu, Dropdown  } from 'antd';
import {Link } from 'react-router-dom'


export default function BasicCardExample({ data }) {


  const menu = (
    <Menu>
      <Menu.Item>


         <i  style={{color:"rgb(152,212,156)"}} className="material-icons ">settings</i>

       <span style={{fontWeight:"bold",color:"rgb(152,212,156)"}}>       <Link to={"/Monteur/Modifier/" + data._id} key={data._id}>   Modifier  </Link>
</span>
       </Menu.Item>
      <Menu.Item>
         <i   style={{fontWeight:"bold",color:"#F3ABAB"}} className="material-icons ">block</i>
        <span style={{fontWeight:"bold",color:"#F3ABAB"}}>  Bloquer</span>
  
          
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