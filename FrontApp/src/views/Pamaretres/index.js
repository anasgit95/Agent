import React from "react";
import { Container   } from "shards-react";
import {  Row, Col } from 'antd'
import PageTitle from "../../components/common/PageTitle";
import './style.css'

const Parametres = (props) => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <PageTitle title="" subtitle={"Parametres"} md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row >

            <Col onClick={() => props.history.push("/Parametre/Departement")} className="blockOne"  xs={{ span: 21, offset: 1 }} lg={{ span: 7, offset: 1 }} >

                <img
                    src={require('../../assets/images/department.png')}
                    alt="Placeholder"
                    style={{height:225}}
                />
                <div className="titleParemetre">
                    <span className="titleParemetre"> Département </span> </div>

            </Col>

            <Col onClick={() => props.history.push("/Parametre/Categorie")} className="blockOne"  xs={{ span: 21, offset: 1 }} lg={{ span: 7, offset: 1 }} >

                <img 
                
              
                alt="Placeholder"
                    src="data:image/png;base64,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" />
                <div className="titleParemetre"><span > Catégorie </span> </div>

                {/* <UserAccountDetails /> */}
            </Col>
        
            <Col onClick={() => props.history.push("/Parametre/Famille")} className="blockOne"  xs={{ span: 21, offset: 1 }} lg={{ span: 7, offset: 1 }} >

                <img 
                style={{height:220}}
                alt="Placeholder"
                    src="data:image/png;base64,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" />
                <div className="titleParemetre"><span > Famille </span> </div>

            </Col>

        </Row>
    </Container>
);

export default Parametres;
