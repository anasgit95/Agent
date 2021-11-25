import React, { useEffect, useState } from "react";

import {
    Row, Col, Button,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    FormInput,
    Card

} from "shards-react";
import { EDIT_CUSTOMER } from '../../actions/mutations'
import { useMutation } from '@apollo/client';
import { Container } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { useToasts } from 'react-toast-notifications';
 import { GET_CUSTOMERS, GET_USER_PROFILE } from '../../actions/queries'
import Select from 'react-select'
import List from '../../HooksApi'
import { useQuery } from '@apollo/client';
import Moment from 'moment'
import Spinner from '../../components/SpinnerLoading/index'

const customStyles = {
    option: (provided, state) => {


        return {

            ...provided,
            color: state.data.Color,
            padding: 10,
            fontWeight: "bold"
        }
    },


}
const ModifyClient = (props) => {

    const { arrayOfFamily, arrayCategorie, arrayDepartement } = List()

    const [formInput, setformInput] = useState();


    const { loading: loadingProfile, data } = useQuery(GET_USER_PROFILE, {
        variables: { id: props.match.params.id },
    });

    useEffect(() => {
        if (!loadingProfile && data) {

            setformInput({ ...data.getProfile, _id: props.match.params.id })
        }
    }, [data]);

    const { addToast } = useToasts();

    const [EDITNCUSTOMER] = useMutation(EDIT_CUSTOMER, {
        update(cache, { data: { editCustomer } }) {
            try {



                const data = cache.readQuery({
                    query: GET_CUSTOMERS,

                });
                let NewIndex = data.fetchCustomers.findIndex((item) => item._id.toString() === editCustomer._id.toString())
                if (NewIndex > -1)
                    data.fetchCustomers[NewIndex] = editCustomer

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

            try {

                const dataProfil = cache.readQuery({
                    query: GET_USER_PROFILE,
                    variables: { id: props.match.params.id },

                });

                dataProfil.getProfile = editCustomer


                cache.writeQuery({
                    query: GET_USER_PROFILE,
                    data: dataProfil,
                    variables: { id: props.match.params.id },

                });
                setLoading(false)


            }
            catch (error) {
                // console.log(error)
            }
        }
    });
    const [loading, setLoading] = useState(false);
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
        e.preventDefault()

        delete formInput.__typename        // setLoading(true)
        // if (images && images.length > 0)
        await EDITNCUSTOMER({ variables: { input: formInput } })
            .then(({ data }) => {
                setLoading(false)
                addToast("Client modifier", { appearance: 'success' });

                props.history.push('/Client')
            })
            .catch(e => {
                addToast(e.message, { appearance: 'warning' });

                setLoading(false)

            })

    }
    return (

        loadingProfile ?
            <Spinner />
            : data && arrayDepartement.length > 0 && arrayOfFamily.length > 0 && arrayCategorie.length > 0 && formInput ?
                <Container fluid className="main-content-container px-4">

                    <Row noGutters className="page-header py-4">
                        <PageTitle sm="12" title="" subtitle="Modifier un client" className="text-sm-left" />

                        {/* <Button theme="accent" size="sm" className="ml-auto"   >
                    <i className="material-icons">file_copy</i> Ajouter un client
          </Button> */}
                    </Row>
                    <Card>
                        <div style={{ textAlign: "center" }} >
                            <img
                                style={{
                                    borderRadius: "50%",
                                    height: 100,
                                    width: 100,
                                    marginTop: 10
                                }}
                                src={
                                    formInput.Picture ? formInput.Picture :
                                        "https://i.stack.imgur.com/l60Hf.png  "
                                }
                                ariarole="presentation"
                                loading="lazy"
                                alt="dd"
                                className="discover-entity-type-card__image-circle Elevation-0dp EntityPhoto-circle-7"
                            />
                        </div>                    <ListGroup flush>
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
                                                        defaultValue={formInput.FirstName}
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
                                                        defaultValue={formInput.LastName}

                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </Col>
 
                                            </Row>
                                            <Row form>
                                                {/* Email */}
                                                <Col md="12" className="form-group">
                                                    <label htmlFor="feEmail">Email</label>
                                                    <FormInput
                                                        type="email"
                                                        id="feEmail"
                                                        name="Email"
                                                        defaultValue={formInput.Email}
                                                        required


                                                        placeholder="Email"
                                                        onChange={handleChange}

                                                    />
                                                </Col>
                                                {/* Password */}
                                 
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
                                                        defaultValue={formInput.Phone1}

                                                        required
                                                    />
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feCity">Téléphone 2</label>
                                                    <FormInput
                                                        type="tel"
                                                        id="phone"
                                                        name="Phone2"
                                                        defaultValue={formInput.Phone2}

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
                                                            defaultValue={formInput.Birthday ? Moment(formInput.Birthday).format("YYYY-MM-DD") : null}

                                                            onChange={handleChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                {/* Password */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="fePassword">Famille</label>
                                                    <Select name="Famille" options={arrayOfFamily}
                                                        defaultValue={arrayOfFamily && data.getProfile.Family ? arrayOfFamily.filter(item => item.value === data.getProfile.Family)[0] : null}
                                                        onChange={handleFormSelectFamily} placeholder={"Famille"} isClearable={true}>




                                                    </Select>

                                                </Col>
                                            </Row>


                                            <Row form>
                                                {/* Email */}
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="feEmail">Catégorie</label>

                                                    <Select onChange={handleFormSelectCategorie}

                                                        name="Categorie" options={arrayCategorie}
                                                        defaultValue={arrayCategorie && data.getProfile.Category ? arrayCategorie.filter(item => item.value === data.getProfile.Category)[0] : null}
                                                        styles={customStyles}

                                                        placeholder={"Catégorie"} isClearable={true}>




                                                    </Select>

                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <label htmlFor="fePassword">Département</label>
                                                    <Select name="Departement" onChange={handleFormSelectDepartement} options={arrayDepartement}
                                                        defaultValue={arrayDepartement && data.getProfile.Department ? arrayDepartement.filter(item => item.value === data.getProfile.Department)[0] : null}

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

                : <Spinner />


    );
}


export default ModifyClient;