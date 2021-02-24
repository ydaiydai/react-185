import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import Modal from './modal'

import '../style.css'
//import './backTop'
import './video'

import video1 from './images/video1.jpg'
import video3 from './images/video3.jpg'
import video4 from './images/video4.jpg'
import video5 from './images/video5.jpg'
import video6 from './images/video6.jpg'

import v1 from './videos/v1.mp4'
import v3 from './videos/v3.mp4'
import v4 from './videos/v4.mp4'
import v5 from './videos/v5.mp4'
import v6 from './videos/v6.mp4'

const ITEM = {
    flex: '20%',
    boxSizing: 'border-box',

    margin: '2rem',
    padding: '1rem',
    border: '1px solid white',
    borderRadius: '5px'
}

function Videodata() {
    const [isOpen, setIsOpen] = useState(false)

    return (

        <div>

            <body>

            <div className = "flex-container">

                <div className = "vids" style = {ITEM}>
                    <img src = {video5} alt = "Video5" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v5}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

                <div className = "vids" style = {ITEM}>
                    <img src = {video1} alt = "Video1" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v1}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

                <div className = "vids" style = {ITEM}>
                    <img src = {video3} alt = "Video3" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v3}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

                <div className = "vids" style = {ITEM}>
                    <img src = {video5} alt = "Video5" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v5}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

                <div className = "vids" style = {ITEM}>
                    <img src = {video1} alt = "Video1" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v1}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

                <div className = "vids" style = {ITEM}>
                    <img src = {video5} alt = "Video5" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v5}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

                <div className = "vids" style = {ITEM}>
                    <img src = {video5} alt = "Video5" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v5}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

                <div className = "vids" style = {ITEM}>
                    <img src = {video1} alt = "Video1" class = "play-btn" onClick={() => setIsOpen(true)}/>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ReactPlayer
                        className='react-player'
                        url= {v1}
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                    </Modal>
                </div>

            </div>

            </body>

        </div>
    )
}

export default Videodata