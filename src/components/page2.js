import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../style.css'
//import './image.js'
import useScript from './useScript'

import view1 from './images/view1.jpg'
import view2 from './images/view2.jpg'
import view3 from './images/view3.jpg'
import sky1 from './images/sky1.jpg'
import japan1 from './images/japan1.jpg'
import trees1 from './images/trees1.jpg'
import flowers1 from './images/flowers1.jpg'

function Imagedata() {

    useScript('./image.js');

    return (

        <div>
            <body>
            <li><a href="#"><button id = "btn" title = "Scroll-to-Top">Back to Top</button></a></li>

        <div class = "flex-container">

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {view2} alt = "Sky"/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>
            </div>

            <div class = "item">
                <img src = {view3} alt = "Killer Whale"/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>
            </div>

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {sky1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/sky</figcaption>
            </div>

            <div class = "item">
                <img src = {japan1} alt = "Raphael"/>
                <figcaption>Image Source: unplash/japan</figcaption>
            </div>

            <div class = "item">
                <img src = {trees1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/trees</figcaption>
            </div>

            <div class = "item">
                <img src = {flowers1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/flowers</figcaption>
            </div>

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {view2} alt = "Sky"/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>
            </div>

            <div class = "item">
                <img src = {view3} alt = "Killer Whale"/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>
            </div>

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {sky1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/sky</figcaption>
            </div>

            <div class = "item">
                <img src = {japan1} alt = "Raphael"/>
                <figcaption>Image Source: unplash/japan</figcaption>
            </div>

            <div class = "item">
                <img src = {trees1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/trees</figcaption>
            </div>

            <div class = "item">
                <img src = {flowers1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/flowers</figcaption>
            </div>

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {view2} alt = "Sky"/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>
            </div>

            <div class = "item">
                <img src = {view3} alt = "Killer Whale"/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>
            </div>

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {sky1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/sky</figcaption>
            </div>

            <div class = "item">
                <img src = {japan1} alt = "Raphael"/>
                <figcaption>Image Source: unplash/japan</figcaption>
            </div>

            <div class = "item">
                <img src = {trees1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/trees</figcaption>
            </div>

            <div class = "item">
                <img src = {flowers1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/flowers</figcaption>
            </div>

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {view2} alt = "Sky"/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>
            </div>

            <div class = "item">
                <img src = {view3} alt = "Killer Whale"/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>
            </div>

            <div class = "item">
                <img src = {view1} alt = "Lake"/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>
            </div>

            <div class = "item">
                <img src = {sky1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/sky</figcaption>
            </div>

            <div class = "item">
                <img src = {japan1} alt = "Raphael"/>
                <figcaption>Image Source: unplash/japan</figcaption>
            </div>

            <div class = "item">
                <img src = {trees1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/trees</figcaption>
            </div>

            <div class = "item">
                <img src = {flowers1} alt = "Raphael"/>
                <figcaption>Image Source: unsplash/flowers</figcaption>
            </div>

        </div>
            </body>

        </div>
    )
}

export default Imagedata