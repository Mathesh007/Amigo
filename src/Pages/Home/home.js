import React from 'react'
import './home.css'
import banner from '../../Images/MainBanner.jpg'

function home() {
  return (
    <>
    <div className='home'>
      <div className='top-section'>
        <div className='leftblur'></div>
        <img src={banner} alt="Banner" />
      </div>
      <div className='body-section'>
        <div className='pink-ellipse'></div>
        <div className='purple-ellipse'></div>
      </div>
    </div>
    </>
  )
}

export default home