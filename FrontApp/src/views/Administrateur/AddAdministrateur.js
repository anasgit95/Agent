import React, { useState } from "react";

import {
    Row, Col, Button,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    FormInput,
    Card

} from "shards-react";
import { NEW_ADMIN } from '../../actions/mutations'
import { useMutation } from '@apollo/client';
import { Container } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { useToasts } from 'react-toast-notifications';
import UploadImage from '../../components/ImageUploading/index'
import SuperAdminRadio from './SuperAdmin'
import { GET_ADMINS } from '../../actions/queries'

const AddAdministrateur = (props) => {
    const { addToast } = useToasts();

    const [formInput, setformInput] = useState({

        Super_admin: false

    });
    const [ADDNEWADMIN] = useMutation(NEW_ADMIN, {
        update(cache, { data: { newAdmin } }) {
            try {

                const data = cache.readQuery({
                    query: GET_ADMINS,

                });

                data.fetchAdmins.unshift(newAdmin)
                cache.writeQuery({
                    query: GET_ADMINS,
                    data: data
                });
                setLoading(false)
                // addToast("Client ajouter", { appearance: 'success' });
            }
            catch (error) {
                //    console.log(error)
            }
        }
    });
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState(false);

    const handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let newFormInput = formInput;

        newFormInput[name] = value;
        setformInput(newFormInput)
    }

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (images && images.length > 0)
        await ADDNEWADMIN({ variables: { input: formInput , file: images[0].file } }).then(({ data }) => {
            setLoading(false)
            addToast("Administrateur ajouter", { appearance: 'success' });
            props.history.push('/admins')

            // props.history.push('/dashboard')
        })
            .catch(e => {
                addToast(e.message, { appearance: 'warning' });

                setLoading(false)

            })
            else         await ADDNEWADMIN({ variables: { input: formInput  } }).then(({ data }) => {
                setLoading(false)
                addToast("Administrateur ajouter", { appearance: 'success' });
                props.history.push('/admins')
    
                // props.history.push('/dashboard')
            })
                .catch(e => {
                    addToast(e.message, { appearance: 'warning' });
    
                    setLoading(false)
    
                })

    }
    return (


        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="" subtitle="Ajouter un administrateur" className="text-sm-left" />

                {/* <Button theme="accent" size="sm" className="ml-auto"   >
                    <i className="material-icons">file_copy</i> Ajouter un client
          </Button> */}
            </Row>
            <Card>
                <UploadImage GetImages={setImages} />
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
                                                name="LastName"
                                                required
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
                                        {/* City */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">Téléphone 1 </label>
                                            <FormInput
                                                type="tel"
                                                id="phoneone"
                                                onChange={handleChange}
                                                name="Phone1"
                                                required

                                            />
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">Téléphone 2</label>
                                            <FormInput
                                                type="tel"
                                                id="phone"
                                                name="Phone2"
                                                onChange={handleChange}
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
                                        {/* Password */}
                                        <Col md="6" className="form-group">

                                            <SuperAdminRadio formInput={formInput} setformInput={setformInput} />
                                        </Col>
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


export default AddAdministrateur;