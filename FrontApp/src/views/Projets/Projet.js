import React, { useEffect, useState, useRef } from "react";


import { Container, Row,  Col,Button} from "shards-react";
import axios from '../../utils/Api'
 
import ReactToPrint from 'react-to-print';

import ProjetDetails from './ProjetsDetails'
import PageTitle from "../../components/common/PageTitle";
import Attestation from './Attestation'

class Example extends React.PureComponent {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { loading: false,data:null };
       }
componentDidMount (){
    axios.get("/evaluation/getOneEvolution/"+this.props.match.params.id).then(
        response=>{
            
         this.setState({loading:false,data:response.data})
          })
}

      render(){ 
     
          return (
          this.state.data?
            <Container fluid className="main-content-container px-4"    >
           
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
            <PageTitle sm="6" title="" subtitle="Projet" className="text-sm-left" />
            <ReactToPrint
          trigger={() => {

            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <Button style={{height:40}}   theme="accent" size="sm" className="ml-auto"  >
        <i className="material-icons">library_add</i> 
        Imprimer l'attestation
      </Button>;
          }}
          content={() => this.componentRefAttestation}
        />
 
            <ReactToPrint
          trigger={() => {

            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <Button style={{height:40}}   theme="accent" size="sm" className="ml-auto"  >
        <i className="material-icons">library_add</i> 
        Imprimer
      </Button>;
          }}
          content={() => this.componentRefAttestation}
        />
         
            </Row>
             <ProjetDetails data={this.state.data} ref={el => (this.componentRef = el)}/>
             <Attestation data={this.state.data} ref={el => (this.componentRefAttestation = el)}/>

          </Container>
        :null
        );
    }
   
}
    export default Example   