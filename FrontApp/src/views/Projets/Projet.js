import React, { useState,useEffect } from "react";

import { Container, Row,  Button} from "shards-react";
import axios from '../../utils/Api'
import CsvDownload from 'react-json-to-csv'

import PageTitle from "../../components/common/PageTitle";
 const Projet =(props) => {
    

     const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
           axios.get("/evaluation/getOneEvolution/"+props.match.params.id).then(
               response=>{
                   
                setLoading(false)
                setData(response.data)
 
               }

             
           )
         
    }, []);
    console.log(data)
        return (
          data?
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
            <PageTitle sm="6" title="" subtitle="Projet" className="text-sm-left" />
           
             
            </Row>
            <CsvDownload data={[data]} />
         {/* {
             Object.keys(data).map((key) => {
                return <p className="whiteSpaceNoWrap"><p> {key} </p>     </p>
             })
         } */}
             
          </Container>
        :null
        );
    }
   
 
    export default Projet   