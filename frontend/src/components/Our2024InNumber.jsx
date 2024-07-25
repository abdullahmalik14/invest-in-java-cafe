import React from 'react';
import video from "../assets/images/video.mp4";
import { FaArrowRight } from 'react-icons/fa';

const Our2024InNumber = () => {
  return (
    <div className="video-container">
        <video loop autoPlay muted playsInline id="bg-video">
            <source src={video} type="video/mp4"/>
        </video>
        <div className="content">
            <h1>Our <span style={{color:"#e11f1c"}}>2024</span> in Number</h1>
            
            <div className='button'>
            <button>Invest Now  
              <FaArrowRight
          className="arrow-icon"
          color="#fff"
          style={{ marginLeft: "10px", position: "relative", top: "3px" }}
        /></button>
            </div>

            <div className='content-card'>
              <div className='card-1'>
                <h4>Stores open with JTC (300)</h4>
                <h1>1/300</h1>
                <p>Top Quality Guaranteed by store, and looking to open more.</p>
              </div>

              <div className='card-1'>
                <h4>Stores open with JTC (300)</h4>
                <h1>1/300</h1>
                <p>Top Quality Guaranteed by store, and looking to open more.</p>
              </div>

              <div className='card-1'>
                <h4>Stores open with JTC (300)</h4>
                <h1>1/300</h1>
                <p>Top Quality Guaranteed by store, and looking to open more.</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Our2024InNumber;
