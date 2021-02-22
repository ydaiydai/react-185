import React, { Component } from 'react';
import Textdata from './page1';
import Imagedata from './page2';
import Videodata from './page3';

import '../style.css'
import Tabledata from './page4';
import Emaildata from './page5';

class Body extends Component {

    componentDidMount(){
        //An array of assets
        let scripts = [
            { src: "./backTop.js"},
            { src: "./image.js"},
            { src: "./video.js"},
            { src: "./emailCheck.js"},
            //{ src: "assets/vendor/bootstrap/js/bootstrap.js" },
            //{ src: "assets/vendor/jquery-placeholder/jquery.placeholder.js" },
            //{ src: "assets/javascripts/theme.js" },
            //{ src: "assets/javascripts/theme.custom.js" },
            //{ src: "assets/javascripts/theme.init.js" }
        ]
        //Append the script element on each iteration
        scripts.map(item => { 
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        })    
     }

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
                return <div className = "text">page 4</div>
            }
        }

        return (displaycontent())
    }
}

export default Body;