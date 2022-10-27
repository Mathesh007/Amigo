import React from 'react'
import './card.css'
import image from '../../Images/DeadPool.png'
import {useState} from 'react';


function Card() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
        <div className={isHovering?'card':'card hidden'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='img-section'>
              <img className='card-image' src={image} />
            </div>
            <div className='content-section'>
                
            </div>
        </div>
    </>
  )
}

export default Card