import React from "react";

const initialState = {
 
  email: "",
  
  
  emailError: "",
  
};

export default class ValiationForm extends React.Component {
    state = initialState;
    

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
 
    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/
    let emailError = "";

    if (!this.state.email.match(mailformat)) {
        emailError = "invalid email";
    }
    if (this.state.email.match(mailformat)){
        emailError = "Valid";
    }

    if (emailError) {
      this.setState({ emailError});
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
    
        <div>
        <label for = "instruction">Please enter email: </label>

          <input style = {{ fontSize: 16}}
            name="email"
            //placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 20, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        
        <button type="submit" style = {{ fontSize: 20}}>submit</button>
      </form>
    );
  }
}

