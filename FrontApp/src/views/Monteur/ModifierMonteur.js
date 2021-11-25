import React, { useState,useEffect } from "react";

import {
    Row, Col, Button,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    FormInput,
    Card,

} from "shards-react";
import { EDIT_EDITOR } from '../../actions/mutations'
import { useMutation } from '@apollo/client';
import { Container } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { useToasts } from 'react-toast-notifications';
// import UploadImage from '../../components/ImageUploading/index'
import Radios from './WorkMode'
import AddCompetences from './AddCompetence'
import { GET_EDITORS,GET_MONTEUR_PROFILE } from '../../actions/queries'
import { useQuery } from '@apollo/client';
import Moment from 'moment'
import Spinner from '../../components/SpinnerLoading/index'
import axios from '../../utils/Api'

const ModifierMonteur = (props) => {
    const { addToast } = useToasts();
   

    const [formInput, setformInput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
           axios.get("/agent/getOneAgent/"+props.match.params.id).then(
               response=>{
                   
                setLoading(false)
                setData(response.data)
                setformInput({ ...response.data,_id: props.match.params.id   })

               }

             
           )
         
    }, []);
 

    const [EditEditor] = useMutation(EDIT_EDITOR, {
        update(cache, { data: { editEditor } }) {
            try {
                const data = cache.readQuery({
                    query: GET_EDITORS,

                });
             
                let NewIndex = data.fetchEditors.findIndex((item) => item._id.toString() === editEditor._id.toString())
                if (NewIndex > -1)
                data.fetchEditors[NewIndex]=editEditor
                 cache.writeQuery({
                    query: GET_EDITORS,
                    data: data
                });
              
                setLoading(false)
             
 
             }
            catch (error) {
                    console.log(error)
            }
            try {
            
                const dataProfil = cache.readQuery({
                    query: GET_MONTEUR_PROFILE,
                    variables: { id: props.match.params.id },

                });
  
                dataProfil.getProfile=editEditor
      
             
                cache.writeQuery({
                    query: GET_MONTEUR_PROFILE,
                    data: dataProfil,
                    variables: { id: props.match.params.id },

                });
                setLoading(false)
             
 
             }
            catch (error) {
                    console.log(error)
            }
        }
    });
  
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
        delete formInput.__typename
        delete formInput.WorkMode.__typename    
        delete formInput.Skills.__typename                
            
        await EditEditor({ variables: { input: formInput } }).then(({ data }) => {
            setLoading(false)
            addToast("Agent modifier", { appearance: 'success' });
            props.history.push('/Agent')

        })
            .catch(e => {
                addToast(e.message, { appearance: 'warning' });

                setLoading(false)

            })
    } 

       return (
        formInput  && data ?

        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle sm="12" title="" subtitle="Modifier un agent" className="text-sm-left" />


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
                    formInput.Picture?formInput.Picture:
                    "https://i.stack.imgur.com/l60Hf.png  "                
                  }
                  ariarole="presentation"
                  loading="lazy"
                  alt="dd"
                  className="discover-entity-type-card__image-circle Elevation-0dp EntityPhoto-circle-7"
                />
                </div>
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
                                                defaultValue={formInput.FirstName}

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
                                                defaultValue={formInput.LastName}

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
                                                defaultValue={formInput.Email}

                                                placeholder="Email"
                                                onChange={handleChange}
                                                required

                                            />
                                        </Col>
                                        {/* Password */}
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
                                    </Row>
                                    <Row form>
                                        {/* Email */}
                                      
                                        {/* Password */}

                                    </Row>

                                    <Row form>
                                        {/* City */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">Téléphone 1 </label>
                                            <FormInput
                                                type="tel" id="phoneone"
                                                onChange={handleChange}
                                                name="Phone1"
                                                required
                                                defaultValue={formInput.Phone1}

                                            />
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

:<Spinner/>

    );
}


export default ModifierMonteur;