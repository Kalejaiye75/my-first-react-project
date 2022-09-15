import React from 'react'
import { Button } from './Button'
import "./Mysection.css"
import "../App.css"

function Mysection() {
  return (
    <div className='my-section'>
        {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
        <h1>ADVENTURE STARTS HERE</h1>
        <p>Start booking</p>
        <div className='my-btn'>
            <Button className="btns" buttonStyle="btn--outline"
            buttonSize="btn-large">Get Started</Button>
        
            <Button className="btns" buttonStyle="btn--primary"
            buttonSize="btn-large">Watch Trailer <i className='far-fa-play-circle'/></Button>
        </div>
    </div>
  )
}

export default Mysection;