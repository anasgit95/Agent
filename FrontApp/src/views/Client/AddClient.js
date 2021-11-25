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
import { NEW_CUSTOMER } from '../../actions/mutations'
import { useMutation } from '@apollo/client';
import { Container } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { useToasts } from 'react-toast-notifications';
import UploadImage from '../../components/ImageUploading/index'
import { GET_CUSTOMERS } from '../../actions/queries'
import Select from 'react-select'
import List from '../../HooksApi/'

const customStyles = {
    option: (provided, state) => { 
        
   
       return  {
            
        ...provided,
         color: state.data.Color,
        padding: 10,
        fontWeight:"bold"
     }},
 
  
}

const AddClient = (props) => {

    const { arrayOfFamily, arrayCategorie, arrayDepartement } = List()






    const { addToast } = useToasts();

    const [formInput, setformInput] = useState({});
    const [ADDNEWCUSTOMER] = useMutation(NEW_CUSTOMER, {
        update(cache, { data: { newCustomer } }) {
            try {
                const data = cache.readQuery({
                    query: GET_CUSTOMERS,

                });
                data.fetchCustomers.unshift(newCustomer)
                cache.writeQuery({
                    query: GET_CUSTOMERS,
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
    const handleFormSelectCategorie = (e) => {
        let newFormInput = formInput;
        if (e)
            newFormInput["Category"] = e.value;
        else
            newFormInput["Category"] = e;

        setformInput(newFormInput)
    }
    const handleFormSelectFamily = (e) => {
        let newFormInput = formInput;
        if (e)
            newFormInput["Family"] = e.value;
        else
            newFormInput["Family"] = e;

        setformInput(newFormInput)
    }
    const handleFormSelectDepartement = (e) => {
        let newFormInput = formInput;
        if (e)
            newFormInput["Department"] = e.value;
        else
            newFormInput["Department"] = e;

        setformInput(newFormInput)
    }
    const onSubmit = async (e) => {

        setLoading(true)
        e.preventDefault()
        if (images && images.length > 0)
            await ADDNEWCUSTOMER({ variables: { input: formInput, file: images[0].file } })
                .then(({ data }) => {
                    setLoading(false)
                    addToast("Client ajouter", { appearance: 'success' });

                    props.history.push('/Client')
                })
                .catch(e => {
                    addToast(e.message, { appearance: 'warning' });

                    setLoading(false)

                })
        else await ADDNEWCUSTOMER({ variables: { input: formInput } })
            .then(({ data }) => {
                setLoading(false)
                addToast("Client ajouter", { appearance: 'success' });

                props.history.push('/Client')
            })
            .catch(e => {
                addToast(e.message, { appearance: 'warning' });

                setLoading(false)

            })
    }
    return (


        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="12" title="" subtitle="Ajouter un client" className="text-sm-left" />

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
                                                pattern="[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,255}"

                                                required
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        {/* Last Name */}

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
                                            <label htmlFor="fePassword">Famille</label>
                                            <Select name="Famille" options={arrayOfFamily}

                                                onChange={handleFormSelectFamily} placeholder={"Famille"} isClearable={true}>




                                            </Select>

                                            {/* <FormSelect size="sm" className="mb-2"  >
                                            <option disabled selected value> Ajouter une Famille</option>

                                                {Family.fetchFamilies.map(data =>
                                                    <option key={data._id} value={data.Designation}>{data.Designation}</option>
                                                )}
                                            </FormSelect> */}
                                        </Col>
                                    </Row>


                                    <Row form>
                                        {/* Email */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feEmail">Catégorie</label>

                                            <Select onChange={handleFormSelectCategorie} name="Categorie" options={arrayCategorie}
                                                styles={customStyles}

                                                placeholder={"Catégorie"} isClearable={true}>




                                            </Select>
                                            {/* <FormSelect size="sm" className="mb-2">
                                                <option disabled selected value> Ajouter une categorie</option>

                                                {Categorie.fetchCategories.map(data =>
                                                    <option key={data._id} value={data.Designation}>{data.Designation}</option>
                                                )}
                                            </FormSelect> */}
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePassword">Département</label>
                                            <Select name="Departement" onChange={handleFormSelectDepartement} options={arrayDepartement}

                                                placeholder={"Département"} isClearable={true}>




                                            </Select>
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


export default AddClient;