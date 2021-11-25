import React from "react";
import { FormRadio } from "shards-react";

export default class FormRadioExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSport: this.props.formInput.WorkMode.FT?"FT":this.props.formInput.WorkMode.FL?"FL":"HT"
    };

    this.changeSport = this.changeSport.bind(this);
  }

  changeSport(sport) {

     let newformInput = this.props.formInput ;
     newformInput.WorkMode={

      FT: false,
      FL: false,
      HT: false
    }
    newformInput.WorkMode[sport]=true
    this.props.setformInput({...newformInput})

      this.setState({
      selectedSport: sport
    });
  }

  render() {
    return (
      <div>
        <div>
          <p className="mb-2">Type de travail</p>
          <FormRadio
            inline
            name="FT"
            checked={this.state.selectedSport === "FT"}
            onChange={() => {
              this.changeSport("FT");
            }}
          >
             Plein temps
          </FormRadio>
          <FormRadio
            inline
            name="HT"
            checked={this.state.selectedSport === "HT"}
            onChange={() => {
              this.changeSport("HT");
            }}
          >
            Mi-temps
          </FormRadio>
          <FormRadio
            inline
            name="FL"
            checked={this.state.selectedSport === "FL"}
            onChange={() => {
              this.changeSport("FL");
            }}
          >
            Free-lance
          </FormRadio>
        </div>
        
      </div>
    );
  }
}