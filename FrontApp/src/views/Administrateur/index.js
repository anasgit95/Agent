import React from "react";

import { Container, Row, Button } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import ListAdministrateur from './ListAdministrateur/index'

const Administrateur = (props) => {
  
    return (

        <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="12" title="" subtitle="Liste des administrateurs" className="text-sm-left" />

                <Button style={{ height: 40 }} onClick={() => props.history.push('admins/ajouter')} theme="accent" size="sm" className="ml-auto"  >
                    <i className="material-icons">library_add</i> Ajouter un administrateur
          </Button>
            </Row>
            <ListAdministrateur/>


        </Container>

    );
}


export default Administrateur