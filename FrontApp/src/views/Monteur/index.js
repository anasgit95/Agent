import React  from "react";

import { Container, Row,  Button} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
 import ListMonteur from './ListMonteur'
const Monteur =(props) => {
         
        return (
          
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
            <PageTitle sm="6" title="" subtitle="Liste des agents" className="text-sm-left" />
           
            <Button style={{height:40}} onClick={()=>props.history.push('Agent/ajouter')} theme="accent" size="sm" className="ml-auto"  >
            <i className="material-icons">library_add</i> 
            Ajouter un agent
          </Button>
            </Row>
        
             
           <ListMonteur {...props}/>
          </Container>
        
        );
    }
   
 
    export default Monteur   