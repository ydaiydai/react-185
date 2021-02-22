import React, { Component } from 'react';
import Itab from './indtab';

class Tablist extends Component {

  render(){
    console.log("id is " + this.props.activetab)

    const styles = {
      color: "white",
      textAlign: "center",
      padding: "25px 15px",
      textDecoration: "none",
      backgroundColor: "#493a3a",
      fontSize: "25px",
  
      top: "50%",
      left: "50%"
  };

    return (
      this.props.tabs.map((tab)=>
        <Itab out = {tab} activetab = {this.props.activetab} ctab = {this.props.ctab} style = {styles}/>
        )
    )
  }
}

export default Tablist;