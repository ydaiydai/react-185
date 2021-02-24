import React, { useState } from 'react'
import Modal from './modal'

import '../style.css'
//import './image.js'

import view1 from './images/view1.jpg'
import view2 from './images/view2.jpg'
import view3 from './images/view3.jpg'
import sky1 from './images/sky1.jpg'
import japan1 from './images/japan1.jpg'
import trees1 from './images/trees1.jpg'
import flowers1 from './images/flowers1.jpg'


const FLEX_CONTAINER = {
    flex: 1,
    flexDirection: 'row',
}

const ITEM = {
    flex: '20%',
    boxSizing: 'border-box',

    margin: '1rem',
    padding: '1rem',
    border: '1px solid white',
    borderRadius: '5px'
}

export default function Images() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>  
        
              
        <div  className = "flex-container">
            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>
            
       
            <div className = "item" style = {ITEM}>
                <img src = {view2} alt = "Sky" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view2} alt = "Sky"/>
                </Modal>
            </div>
           
            
            <div className = "item" style = {ITEM}>
                <img src = {view3} alt = "Killer Whale" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view3} alt = "Killer Whale"/>
                </Modal>
            </div>


            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view2} alt = "Sky" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view2} alt = "Sky"/>
                </Modal>
            </div>
           
            
            <div className = "item" style = {ITEM}>
                <img src = {view3} alt = "Killer Whale" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view3} alt = "Killer Whale"/>
                </Modal>
            </div>


            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view2} alt = "Sky" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view2} alt = "Sky"/>
                </Modal>
            </div>
           
            
            <div className = "item" style = {ITEM}>
                <img src = {view3} alt = "Killer Whale" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view3} alt = "Killer Whale"/>
                </Modal>
            </div>


            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view2} alt = "Sky" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view2} alt = "Sky"/>
                </Modal>
            </div>
           
            
            <div className = "item" style = {ITEM}>
                <img src = {view3} alt = "Killer Whale" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view3} alt = "Killer Whale"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view3} alt = "Killer Whale" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view3} alt = "Killer Whale"/>
                </Modal>
            </div>


            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view2} alt = "Sky" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view2} alt = "Sky"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view3} alt = "Killer Whale" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.healthinsurance.org/alaska/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view3} alt = "Killer Whale"/>
                </Modal>
            </div>


            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view2} alt = "Sky" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: https://www.fodors.com/world/north-america/usa/alaska/experiences/news/ultimate-things-to-do-in-alaska</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view2} alt = "Sky"/>
                </Modal>
            </div>

            <div className = "item" style = {ITEM}>
                <img src = {view1} alt = "Lake" onClick={() => setIsOpen(true)}/>
                <figcaption>Image Source: http://www.alaskademocrats.org/</figcaption>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <img src = {view1} alt = "Lake"/>
                </Modal>
            </div>

            </div>
    
    </>
  )
}