import React, { useEffect, useState, useRef } from "react";


import { Container, Row, Col, Button } from "shards-react";
import './style.css'

class ProjetDetails extends React.PureComponent {
  render() {

    const { data } = this.props



    return (

      <div    >

          <h1 style={{textAlign:"center",marginTop:40}}> Attestation de passage </h1>
         <p style={{color:"black",padding:40}}> 
             Par la présente, nous confirmons le passage d'un technicien mandaté par ITC ENGINEERING pour 
             réaliser la visite préalable à l'établissement de l'audit énergétique de mon logement" Ce document 
             n'engage à aucun travaux ni la validation d'aucun devis.
             <hr></hr>
             <p style={{color:"black" }}> 
 Date et heure : Le {data.createdAt}
             <hr></hr>
             <div style={{display:"flex"}}> 
             <p  style={{flex:1}}> 
 Nom et prénom du bénificiaire :  {data.generaliter.fullName}
             <hr></hr>
 </p>   
 <p  style={{flex:1}}> 
 Nom et prénom de l'inspecteur  :  {data.Creator.FirstName+ " "+ data.Creator.LastName}
             <hr></hr>
 </p>
             </div>

             <div style={{display:"flex"}}> 
             <p  style={{flex:1}}> 
Signature bénéficiaire 
<img src={"data:image/png;base64,"+data.signatureBenefique} />

  </p>   
 <p  style={{flex:1}}> 
 Signature l'inspecteur  
<img src={"data:image/png;base64,"+data.signatureInspecteur} />
  </p>
             </div>
         
 </p>
 </p>


     
     
      </div>
    );
  }

}
export default ProjetDetails



