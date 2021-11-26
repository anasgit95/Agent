import React from "react";
import { FormCheckbox } from "shards-react";

export default class InlineCheckboxes extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        VE: this.props.formInput.Skills.VE,
        MD: this.props.formInput.Skills.MD,
     };
  }

  handleChange(e, name) {
    const newState = {};
    newState[name] = !this.state[name];
    let newInput = this.props.formInput ;
    newInput.Skills={...this.state, ...newState}
     this.props.setformInput({...newInput})
    this.setState({ ...this.state, ...newState });
  }

  render() {
    return (
      <div>
        <p>Compétences</p>
        <FormCheckbox
          inline
          checked={this.state.VE}
          onChange={e => this.handleChange(e, "VE")}
        >
            Video editor 
        </FormCheckbox>
        <FormCheckbox
          inline
          checked={this.state.MD}
          onChange={e => this.handleChange(e, "MD")}
        >
       Motions designer
        </FormCheckbox>
  
      </div>
    );
  }
}