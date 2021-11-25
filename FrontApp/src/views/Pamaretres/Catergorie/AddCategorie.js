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
import { NEW_CATEGORIE } from '../../../actions/mutations'
import { useMutation } from '@apollo/client';
import { GET_CATEGORIES } from '../../../actions/queries'
import { BlockPicker } from 'react-color';

export default ({ openModal, setOpeModal, refetch }) => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState({
        background: '#BA68C8',

    });

    const [formInput, setformInput] = useState({
        Color: color.background

    });

    const handleChangeComplete = (color) => {

        let oldformInput = formInput
        oldformInput.Color = color.hex
        setformInput(oldformInput)
        setColor({
            background: color.hex
        })
    };

    const [ADDNEWCATEGORIE] = useMutation(NEW_CATEGORIE, {
        update(cache, { data: { addCategory } }) {
            try {
                const data = cache.readQuery({
                    query: GET_CATEGORIES,

                });


                data.fetchCategories.unshift(addCategory)
                cache.writeQuery({
                    query: GET_CATEGORIES,
                    data: data
                });
                setOpeModal(false)
                addToast("Catégorie  ajouter", { appearance: 'success' });
                setLoading(false)
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
        await ADDNEWCATEGORIE({ variables: { input: formInput } }).then(({ data }) => {
            setLoading(false)
            setOpeModal(false)

            // props.history.push('/dashboard')
        })
            .catch(e => {
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
            <ModalHeader>Ajouter une catégorie</ModalHeader>

            <ListGroupItem className="p-3">
                <Row>
                    <Col>
                        <Form onSubmit={onSubmit} >
                            <Row form>
                                {/* First Name */}
                                <Col span="12" className="form-group">
                                    <label htmlFor="feFirstName">
                                        Désignation</label>
                                    <FormInput
                                        id="Designation"
                                        placeholder="Designation"
                                        name="Designation"
                                        required
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

                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col md="12" className="form-group">
                                    <BlockPicker
                                        width={"100%"}
                                        colors={['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#F5C10F', '#ff8a65', '#ba68c8']}
                                        color={color.background}
                                        onChangeComplete={handleChangeComplete}


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
