// Reference: https://www.youtube.com/watch?v=FM2RN8rHCTE&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM&index=12

import React, { Component } from 'react';

const initialState = {
    email: "",
    emailError: "", 
};

class Emaildata extends Component {
    state = initialState;
  
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({[event.target.name]: isCheckbox ? event.target.checked : event.target.value});
    };

    validate = () => {
        var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/
        let emailError = "";

        if (!this.state.email.match(mailformat)) {
            emailError = "Invalid email address";
        }
        if (this.state.email.match(mailformat)){
            emailError = "Email successfully recorded";
        }
        if (emailError) {
          this.setState({emailError});
          return false;
        }
        return true;
    };

  handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
          this.setState(initialState);
      }
  };

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
          <div>
          <label>Enter email: </label>

              <input style = {{ fontSize: 25}}
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
              />
              <div style={{ fontSize: 25, color: "red" }}>
                  {this.state.emailError}
              </div>
          </div>
        
          <button type="submit" style = {{ fontSize: 25}}>submit</button>
          </form>
        );
    }
}

export default Emaildata;

