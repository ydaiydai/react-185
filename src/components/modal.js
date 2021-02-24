// Reference: https://www.youtube.com/watch?v=LyLa7dU5tp8&list=LL&index=1&t=631s

import React from 'react'
import ReactDom from 'react-dom'

const modal_styles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: '0px',
  zIndex: 1000
}

const overlay_styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: 1000
}

function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={overlay_styles} onClick={onClose}/>
      <div style={modal_styles}> 
            {children}
      </div>
    </>,
    document.getElementById('portal')
    
  )
}

export default Modal