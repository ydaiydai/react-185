import React, { Component } from 'react';

import Textdata from './textPage';
import Videodata from './videoPage';
import Imagedata from './imagePage';
import Tabledata from './tablePage';
import Emaildata from './emailPage';

import '../style.css'

class Body extends Component {

    render() {

        var displaycontent = () =>{
            var activetab = this.props.activetab;
            if (activetab == 1){
                return <Textdata/>
            }
            else if (activetab == 2){
                return <Imagedata/>
            }
            else if (activetab == 3){
                return <Videodata/>
            }
            else if (activetab == 4){
                return <Tabledata/>
            }
            else if (activetab == 5){
                return <Emaildata/>
            }
            else{
                return <div className = "text">page 6</div>
            }
        }

        return (displaycontent())
    }
}

export default Body;