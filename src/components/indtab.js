import React, { Component } from 'react';


function Itab (props){

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

    const addstyle = () =>{
        if (props.activetab == props.out.id){
            return {backgroundColor:'red'}
        }
        else{
            return {styles}
        }       
    };

    console.log(props)
    //console.log(props.activetab)

    return (
        <div style = {addstyle()} onClick = {props.ctab.bind(this, props.out.id)} >{props.out.title}</div>
    );
}

export default Itab;