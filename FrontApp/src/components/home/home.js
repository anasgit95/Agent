import React from "react";
import { Container, Row} from "shards-react";
import PageTitle from "../common/PageTitle";


class Home extends React.Component {
  

    render() {
        
        return (
         
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Dashboards" subtitle="Itc audit" className="text-sm-left" />
            </Row>
           
            </Container>
                );

      }

   
}
  export default Home;