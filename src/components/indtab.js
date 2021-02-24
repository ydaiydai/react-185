import React, { Component } from 'react';


function Itab (props){

    const addstyle = () =>{
        if (props.activetab == props.out.id){
            return {display: 'block', backgroundColor:'green', padding: "25px 20px" }
        }
        else{
            return {display: 'block', padding: "25px 20px"}
        }       
    };

    console.log(props)
    //console.log(props.activetab)

    return (
        <div style = {addstyle()} onClick = {props.ctab.bind(this, props.out.id)} >{props.out.title}</div>
    );
}

export default Itab;