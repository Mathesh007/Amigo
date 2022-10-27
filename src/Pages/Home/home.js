import React from 'react'
import './home.css'
import banner from '../../Images/MainBanner.jpg'
import Navbar from '../../Components/Navbar/Navbar'

function home() {

  let top_h1="Avengers Infinity War";
  let top_text="The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan."

  return (
    <>
    <div className='home'>
      <div className='top-section'>
        <div className='leftblur'></div>
        <Navbar/>
        <img src={banner} alt="Banner" />
        <div className='top-content'>
          <div className='top-text-wrapper'>
            <h1 className='top-h1'>
              {top_h1}
            </h1>
            <div className='top-text'>
              {top_text}
            </div>
            <div className='top-submit'>
              <div className='watchnow hactive'>
                Watch Now
              </div>
              <div className='explore'>
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-body'>
        <div className='body-section'>
          <div className='pink-ellipse'></div>
          <div className='purple-ellipse'></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default home