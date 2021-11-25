import React, {   useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import { useToasts } from 'react-toast-notifications';
 import { useMutation } from '@apollo/client';
 import {EDIT_CUSTOMER,EDIT_ADMIN,EDIT_EDITOR} from "../../actions/mutations"
 

const UserAccountDetails = ({ myprofile, authUser }) => {
  const { addToast } = useToasts();

  const [formInput, setformInput] = useState({ ...authUser });
  const [loading, setLoading] = useState(false);

  const [editCustomer] = useMutation(EDIT_CUSTOMER, {
    update(cache, { data: { newCustomer } }) {
        try {
            // const data = cache.readQuery({
            //     query: GET_CUSTOMERS,

            // });
            // data.fetchCustomers.unshift(newCustomer)
            // cache.writeQuery({
            //     query: GET_CUSTOMERS,
            //     data: data
            // });
            // addToast("Client ajouter", { appearance: 'success' });

                       setLoading(false)

                   addToast("Modification enregistrer", { appearance: 'success' });

        }
        catch (error) {
          addToast(error.message, { appearance: 'warning' });
        }
    }
});const [editAdmin] = useMutation(EDIT_ADMIN, {
  update(cache, { data: { newCustomer } }) {
      try {
        
        setLoading(false)

        addToast("Modification enregistrer", { appearance: 'success' });
 
          // const data = cache.readQuery({
          //     query: GET_CUSTOMERS,

          // });
          // data.fetchCustomers.unshift(newCustomer)
          // cache.writeQuery({
          //     query: GET_CUSTOMERS,
          //     data: data
          // });
          // setLoading(false)
          // addToast("Client ajouter", { appearance: 'success' });
      }
      catch (error) {
        addToast(error.message, { appearance: 'warning' });
      }
  }
});const [editEditor] = useMutation(EDIT_EDITOR, {
  update(cache, { data: { EDIT_EDITOR } }) {
      try {
        
        setLoading(false)

        addToast("Modification enregistrer", { appearance: 'success' });
 
          // const data = cache.readQuery({
          //     query: GET_CUSTOMERS,

          // });
          // data.fetchCustomers.unshift(newCustomer)
          // cache.writeQuery({
          //     query: GET_CUSTOMERS,
          //     data: data
          // });
          // setLoading(false)
          // addToast("Client ajouter", { appearance: 'success' });
      }
      catch (error) {
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
       delete formInput.__typename 
       delete formInput.Role 

       console.log(authUser.Role)
      if(authUser.Role === "admin") {
           await editAdmin({ variables: { input: formInput  } })
          .then(({ data }) => {
  
     })
              .catch(e => {
                //  addToast(e.message, { appearance: 'warning' });

 
             })
      }
   else if( authUser.Role === "customer")    {
      await editCustomer({ variables: { input: formInput  } })
      .then(({ data }) => {

 })
          .catch(e => {

 
         })
     }
     else        await editEditor({ variables: { input: formInput  } })
     .then(({ data }) => {

})
         .catch(e => {
            // addToast(e.message, { appearance: 'warning' });

 
        })
       // setLoading(true)
    // // if (images && images.length > 0)
    //     await EDITNCUSTOMER({ variables: { input: formInput  } })
    //         .then(({ data }) => {
    //             setLoading(false)
    //             addToast("Client modifier", { appearance: 'success' });

    //             props.history.push('/Client')
    //         })
    //         .catch(e => {
    //             addToast(e.message, { appearance: 'warning' });

    //             setLoading(false)

    //         })

  }
  return (
    <Card  >
      <CardHeader className="border-bottom">
        <h6 className="m-0">{myprofile ? "Mon profil" : "Profil"} {" details"}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={onSubmit} >
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">Prénom</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="Prénom"
                      required
                      defaultValue={authUser.FirstName}
                      name="FirstName"
                      pattern="[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,255}"
                      onChange={handleChange}
                      disabled={!myprofile}

                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Nom</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="Nom"
                      name="LastName"
                      pattern="[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,255}"
                      defaultValue={authUser.LastName}

                      required
                      disabled={!myprofile}

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
                      defaultValue={authUser.Email}
                      required
                      placeholder="Email"
                      onChange={handleChange}
                      autoComplete="email"
                      disabled={!myprofile}

                    />
                  </Col>
                  {/* Password */}
                  {/* <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Mot de passe </label>
                    <FormInput
                      type="password"
                      id="fePassword"
                      placeholder="Mot de passe"
                      name="Hash_Password"
                      onChange={handleChange}
                      autoComplete="current-password"
                    />
                  </Col> */}
                </Row>

                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">Téléphone 1 </label>
                    <FormInput
                      type="tel"
                      id="phoneone"
                      name="Phone1"
                      defaultValue={authUser.Phone1}
                      onChange={handleChange}
                      disabled={!myprofile}

                      required
                    />
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">Téléphone 2</label>
                    <FormInput
                      type="tel"
                      id="phone"
                      name="Phone2"
                      defaultValue={authUser.Phone2}
                      onChange={handleChange}
                      disabled={!myprofile}

                    />
                  </Col>

                </Row>

                <Row style={{ height: 40 }} form>
{myprofile? 
 <Button  disabled={loading} style={{ position: "absolute", right: 10 }} theme="accent">
 <i className="material-icons">save</i> 
 Enregistrer

</Button>
:null

}
                 
                </Row>           
                
                 </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
