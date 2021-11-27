import React, { useEffect, useState, useRef } from "react";


import { Container, Row,  Col,Button} from "shards-react";
 
class ProjetDetails extends React.PureComponent {
    render(){ 

   const {data} =this.props


      
          return (
           
            <Container fluid className="main-content-container px-4"   >
           
            
            <Row  >
            <Col lg={8}>
                <h2> Généralité </h2>
                <h6> Type : {data.generaliter.type} </h6>
                <h6> Année de construction  : {data.generaliter.yearConstruction} </h6>
                <h6> Nombre des occupants  : {data.generaliter.occupantNumber} </h6>
                <h6> Nombre d'adultes : {data.generaliter.adultNumber} </h6>
 </Col>
 <Col lg={4}  >
                <h6>Nom : {data.generaliter.fullName} </h6>
                <h6>Téléphone : {data.generaliter.phone} </h6>
                <h6>Email :  {data.generaliter.email} </h6>
                <h6>Adresse : {data.generaliter.adresse} </h6>

 </Col>
 <Col lg={8}>
                <h2> Contexte  </h2>
                <h6> Priorités du client : {data.context && data.context.priority && data.context.priority.map(item=><p> {item}</p>)} </h6>
                <h6> Solution technique  : {data.context.valueTechnique} </h6>
                <h6> Occupation du logement  : {data.context.logement} </h6>
                <h6> Logement occupé pendant les travaux : {data.context.logement} </h6>
                <h6> Niveau de confort
                <p>   hiver : {data.context.confortAccoutique} </p>

                <p> Eté  : {data.context.confortEte} </p>
                <p>  Acoustique  : {data.context.confortAccoutique} </p>
                </h6>

                    <h6> Plafond de ressource :  {data.context.profond}</h6>
 
                    <h6> Projet bénéficiant des certificats d'économie d'énergie : { data.context.certificatEco} </h6>
                    <h6> Extension Effectuée au bâtiment  :{data.context.certificatEco} </h6>

 </Col>


 <Col lg={8}>
                <h2> Architecture  </h2>
 
 
                 <h6> Surface habitable du batiment : {data.architecture.surfacehabtable}  </h6>
                <h6> Nombre de niveaux:
                    <p> Sous sol : {data.architecture.sousSol}</p>
                    <p> RDC : {data.architecture.rdc}</p>
                    <p> R+1 : {data.architecture.r1}</p>
                    <p> R+2: {data.architecture.r2}</p>


                    
                     </h6>
                <h6> Nature du plafond  : {data.architecture.platFondLvl} </h6>
                <h6> Nature du plancher base  : {data.architecture.plancherBas} </h6>
               
                   

 </Col>
  
 <Col lg={12}>
                <h2> Répartition mur   </h2>
 
                <Row>
                             <Col lg="1"
                 >    
                 <h6>nom De mur </h6>
 
                     </Col>  
                 <Col lg="1.4"
                 >    
                 <h6>Composition</h6>
 
                     </Col>
                     <Col lg="1"
                 > 
           
                 <h6>epaisseur</h6>
 
                     </Col>
                     <Col lg="1.3"
                 >    
                 <h6>epaisseur-Isolation</h6>
 
                     </Col>
                     <Col lg="0.9"
                 >    
                 <h6>hauteur</h6>
 
                     </Col>
                     <Col lg="1"
                 >    
                 <h6>isolation</h6>
 
                     </Col>
                     <Col lg="1"
                 >    
                 <h6>longeur</h6>
 
                     </Col>
                   
                     <Col lg="1"
                 >    
                 <h6>orientation</h6>
 
                     </Col>
                     <Col lg="1"
                 >    
                 <h6>position</h6>
 
                     </Col>
                     <Col lg="1.3"
                 >    
                 <h6>resistanceIsolation</h6>
 
                     </Col>
                     <Col lg="1"
                 >    
                 <h6>typeIsolation</h6>
 
                     </Col>
                     
                </Row>
                {data.repartissant.map(reparti=>
                <Row>
                             <Col lg="1 "
                 >    
                  <p>{reparti.nomDeMur}</p>

                     </Col>  
                 <Col lg="1.4"
                 >    
                  <p>{reparti.composition}</p>

                     </Col>
                     <Col lg="1"
                 > 
           
                  <p>{reparti.epaisseur}</p>

                     </Col>
                     <Col lg="1.3"
                 >    
                  <p>{reparti.epaisseurIsolation}</p>

                     </Col>
                     <Col lg="0.9"
                 >    
                  <p>{reparti.hauteur}</p>

                     </Col>
                     <Col lg="1"
                 >    
                  <p>{reparti.isolation}</p>

                     </Col>
                     <Col lg="1"
                 >    
                  <p>{reparti.longeur}</p>

                     </Col>
                   
                     <Col lg="1"
                 >    
                  <p>{reparti.orientation}</p>

                     </Col>
                     <Col lg="1"
                 >    
                  <p>{reparti.position}</p>

                     </Col>
                     <Col lg="1.3"
                 >    
                  <p>{reparti.resistanceIsolation}</p>

                     </Col>
                     <Col lg="1"
                 >    
                  <p>{reparti.typeIsolation}</p>

                     </Col>
                     
                </Row>
                )
                }
               

               
                   

 </Col>
 <Col lg={12}>
                <h2> Ouvrant type   </h2>
                <Row>
                             <Col lg="2"
                 >    

                 

 
                 <h6>Nom</h6>
 
                     </Col>  
                     <Col lg="2"
                 >    
                 <h6>Designation</h6>
 
                     </Col>
                     <Col lg="2"
                 > 
           
                 <h6>materiaux</h6>
 
                     </Col>
                     <Col lg="2"
                 >    
                 <h6>Type De Viltrage</h6>
 
                     </Col>
                     <Col lg="2"
                 >    
                 <h6>Type de paroi</h6>
 
                     </Col>
                    
                    
                   
                  
             
                     
                     
                </Row>
 
                {data.ouvrantType.map(reparti=>
                <Row>
                             <Col lg="2"
                 >    

                 

 
                  <p>{reparti.nom}</p>

                     </Col>  
                     <Col lg="2"
                 >    
                  <p>{reparti.designation}</p>

                     </Col>
                     <Col lg="2"
                 > 
           
                  <p>{reparti.materiaux}</p>

                     </Col>
                     <Col lg="2"
                 >    
                  <p>{reparti.TypeDeViltrage}</p>

                     </Col>
                     <Col lg="2"
                 >    
                  <p>{reparti.typeDeParoi}</p>

                     </Col>
                    
                    
                   
                  
             
                     
                     
                </Row>
                )
                }
               

               
                   

 </Col>




            </Row>
          {/* {
             Object.keys(data).map((key) => {
                return <p className="whiteSpaceNoWrap"><p> {key} </p>     </p>
             })
         } */}
             
          </Container>
         );
    }
   
}
export default ProjetDetails   