import React from "react";

import { Container, Row, Button   } from "shards-react";
 import PageTitle from "../../components/common/PageTitle";
 import ListClient from './ListClient/ListClient'
 const Client = (props) => {


  return (

    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="6" title="" subtitle="Liste des clients" className="text-sm-left" />

        <Button style={{ height: 40 }} onClick={() => props.history.push('Client/ajouter')} theme="accent" size="sm" className="ml-auto"  >
          <i className="material-icons">library_add</i> Ajouter un client
          </Button>
      </Row>
      
   

       <ListClient/>
    </Container>

  );
}


export default Client