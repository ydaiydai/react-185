import React from 'react'
import ReactDOM from 'react-dom'
import '../style.css'

import sky1 from './images/sky1.jpg'

function Textdata() {
    return (

        <div>

            <body>
                <div class = "box">
		            <div class = "imageBox">
			            <img src= {sky1}/>
		            </div>
		            <div class = "content">
			            <h2>
				            About Me
			            </h2>
			            <p>
				            Using pre-built character in a single-player RPG is generally a safer choice for game developers. 
				            While it might limit the player’s level of creativity, it usually makes the game more cohesive. 
				            Unless the game strongly emphasizes its sandbox elements or has much room for a created protagonist, 
				            giving the player established characters would only lead to few criticisms if at all. 
			            </p>
		            </div>
	            </div>
            </body>

        </div>
    )
}

export default Textdata