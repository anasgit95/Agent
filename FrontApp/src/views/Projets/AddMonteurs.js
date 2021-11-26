import React, { useState } from "react";

import {
    Row, Col, Button,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    FormInput,
    Card,

} from "shards-react";
 
 import { Container } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { useToasts } from 'react-toast-notifications';
import axios from '../../utils/Api'

const AddMonteur = (props) => {
    const { addToast } = useToasts();

    const [formInput, setformInput] = useState({
        Skills: {
            VE: false,
            MD: false
        },
        WorkMode: {

            FT: true,
            FL: false,
            HT: false
        },


    });

 

  
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState(false);

    const handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let newFormInput = formInput;
        if (name)
            newFormInput[name] = value;
        // console.log(newFormInput)
        setformInput(newFormInput)
    }

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        axios.post("/agent",formInput).then(response=>
            
            {
                setLoading(false)
                addToast("Agent ajouter", { appearance: 'success' });
                props.history.push('/Agent')
            }
            )
        
         
        
    }
     return (


        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="12" title="" subtitle="Ajouter un agent" className="text-sm-left" />


            </Row>
            <Card>
                {/* <UploadImage GetImages={setImages} /> */}

                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Form onSubmit={onSubmit} >
                                    <Row form>
                                        {/* First Name */}

                                        {/* Last Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feLastName">Prénom</label>
                                            <FormInput
                                                id="Prenom"
                                                placeholder="Prénom"
                                                required
                                                name="FirstName"
                                                pattern="[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,255}" 

                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col span="6" className="form-group">
                                            <label htmlFor="feFirstName">Nom</label>
                                            <FormInput
                                                id="feFirstName"
                                                placeholder="Nom"
                                                required
                                                name="LastName"
                                                pattern="[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,255}" 

                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        {/* Email */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feEmail">Email</label>
                                            <FormInput
                                                type="email"
                                                id="feEmail"
                                                name="Email"

                                                placeholder="Email"
                                                onChange={handleChange}
                                                required

                                            />
                                        </Col>
                                        {/* Password */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePassword">Mot de passe</label>
                                            <FormInput
                                                type="password"
                                                id="fePassword"
                                                placeholder="Mot de passe"
                                                name="Hash_Password"

                                                onChange={handleChange}
                                                required

                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        {/* Email */}
                                        <Col md="6" className="form-group">
                                            <FormGroup>
                                                <label htmlFor="feAddress">Date de naissance</label>
                                                <FormInput
                                                    type="date"
                                                    id="feAddress"
                                                    placeholder="datedenaissance"
                                                    name="Birthday"

                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">Téléphone  </label>
                                            <FormInput
                                                type="tel" id="phoneone"
                                                onChange={handleChange}
                                                name="Phone1"
                                                required

                                            />
                                        </Col>
                                        {/* Password */}

                                    </Row>

                                    <Row form>
                                        {/* City */}
                                       
                                    

                                    </Row>

                                 
                                   
                                   
                                    <Row style={{ height: 40 }} form>

                                        <Button disabled={loading} style={{ position: "absolute", right: 10 }} theme="accent">
                                            <i className="material-icons">save</i> Enregistrer

                                     </Button>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Container>



    );
}


export default AddMonteur;