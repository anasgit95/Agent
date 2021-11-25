import React, { useState } from "react";


import {
    Modal,
    Row,
    Col,
    Button,
    ListGroupItem,
    Form,
    FormInput,
    ModalHeader
} from "shards-react";
import { useToasts } from 'react-toast-notifications';
import { EDIT_GATEGORIE } from '../../../actions/mutations'
import { useMutation } from '@apollo/client';
import {GET_CATEGORIES} from '../../../actions/queries'
import { BlockPicker    } from 'react-color';

export default ({ openModal, setOpeModal,data }) => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState({
        background: data.Color,

    });
    const [formInput, setformInput] = useState({
        _id:data._id,
        Designation:data.Designation,
        Description:data.Description,
        Color:data.Color,
        Active:true,
        Deleted:false,

    });
    const handleChangeComplete = (color) => {

        let oldformInput = formInput
        oldformInput.Color=color.hex
        setformInput(oldformInput)
        setColor({
            background:color.hex
        })
       };
    const [EDITCATEOGRIE] = useMutation(EDIT_GATEGORIE, {
        update(cache, { data: { editCategory } }) {
            try { 
                 const data = cache.readQuery({
                    query: GET_CATEGORIES,
                });
                let NewIndex = data.fetchCategories.findIndex((item) => item._id.toString() === editCategory._id.toString())
                if (NewIndex > -1)
                data.fetchCategories[NewIndex]=editCategory
                cache.writeQuery({
                    query: GET_CATEGORIES,
                    data: data
                });
                // if(data.fetchFamilies===undefined)
                // data.fetchFamilies=[]
                //  data.fetchFamilies.unshift(addFamily)
 
                // cache.writeQuery({
                //     query: GET_FAMILY,
                //     data: data
                // });
                //  addToast("Département  ajouter", { appearance: 'success' });

 

                // addToast("Client ajouter", { appearance: 'success' });
            }
            catch (error) {
                console.log(error)
                addToast(error.message, { appearance: 'warning' });
            }
        }
    });
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
        await EDITCATEOGRIE({ variables: { input: formInput } }).then(({ data }) => {
            setLoading(false)
            setOpeModal(false)   
            // props.history.push('/dashboard')
        })
            .catch(e => {
                console.log(e)           
                 addToast(e.message, { appearance: 'warning' });
                 setLoading(false)

            })
    }


    //   if (loading) return <Spinner />;

    //   if (error) return `Error! ${error.message}`;
    return (


        <Modal
            id="demo-modal"
            open={openModal}
            toggle={() => setOpeModal(false)}
        >
            <ModalHeader>Modifier Catégorie </ModalHeader>

            <ListGroupItem className="p-3">
                <Row>
                    <Col>
                        <Form onSubmit={onSubmit} >
                            <Row form>
                                {/* First Name */}
                                <Col span="12" className="form-group">
                                    <label htmlFor="feFirstName">
                                        Designation</label>
                                    <FormInput
                                        id="Designation"
                                        placeholder="Designation"
                                        name="Designation"
                                        required
                                        defaultValue={formInput.Designation}

                                        onChange={handleChange}
                                     />
                                </Col>
                                {/* Last Name */}
                                <Col md="12" className="form-group">
                                    <label htmlFor="feLastName">
                                        Description</label>
                                    <FormInput
                                        id="Description"
                                        placeholder="Description"
                                        name="Description"
                                        defaultValue={formInput.Description}

                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col md="12" className="form-group">
                                    <BlockPicker   
                                    width={"100%"}
                                    colors={['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#F5C10F', '#ff8a65', '#ba68c8']}
                                    color={ color.background }
                                    onChangeComplete={handleChangeComplete }
                                    
                                    
                                    />
                                 </Col>
                            </Row>





                            <Row style={{ height: 40 }} form>

                                <Button disabled={loading} style={{ position: "absolute", right: 10 }} theme="accent">
                                    Enregistrer
                                     </Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </ListGroupItem>

        </Modal>



    )
}
