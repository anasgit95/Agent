import React  from "react";

import { Container, Row,  Button} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
 import ListeDesprojets from './ListDesProjets'
const Monteur =(props) => {
         
        return (
          
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
            <PageTitle sm="6" title="" subtitle="Liste des projets" className="text-sm-left" />
           
             
            </Row>
        
             
           <ListeDesprojets {...props}/>
          </Container>
        
        );
    }
   
 
    export default Monteur   