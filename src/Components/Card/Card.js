import React from 'react'
import './card.css'
import image1 from '../../Images/Spiderman.png'
import image2 from '../../Images/Dragonball.png'
import image3 from '../../Images/DeadPool.png'
import image4 from '../../Images/Freeguy.png'
import image5 from '../../Images/Realsteel.png'
import image6 from '../../Images/Transformers.png'
import image7 from '../../Images/Master.png'
import image8 from '../../Images/RRR.png'

import {useState} from 'react';


function Card({no}) {

  let cardList = [image1,image2,image3,image4,image5,image6,image7,image8]

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
              <img className='card-image' src={cardList[no]} />
            </div>
            <div className='content-section'>
            Deadpool protects a young mutant Russell from the authorities and gets thrown in prison. However, he escapes and forms a team of mutants to prevent a time-travelling mercenary from killing Russell.
            </div>
        </div>
    </>
  )
}

export default Card