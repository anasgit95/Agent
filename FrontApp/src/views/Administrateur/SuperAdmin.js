import React from "react";
import { FormRadio } from "shards-react";

export default class FormRadioExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSport: "Non"
    };

    this.changeSport = this.changeSport.bind(this);
  }

  changeSport(sport) {
   let newformInput = this.props.formInput ;
     
  
  
     if(sport==="Oui"){
        newformInput.Super_admin=true

    }
    else 
    newformInput.Super_admin=false
    this.props.setformInput(newformInput)

     this.setState({
      selectedSport: sport
    });
  }

  render() {
    return (
      <div>
        <div>
          <p className="mb-2">Super administrateur  </p>
      
          <FormRadio
            inline
            name="Oui"
            checked={this.state.selectedSport === "Oui"}
            onChange={() => {
              this.changeSport("Oui");
            }}
          >
            Oui
          </FormRadio>
          <FormRadio
            inline
            name="Non"
            checked={this.state.selectedSport === "Non"}
            onChange={() => {
              this.changeSport("Non");
            }}
          >
            Non
          </FormRadio>
        </div>
        
      </div>
    );
  }
}