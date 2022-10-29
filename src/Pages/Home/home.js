import React from 'react'
import './home.css'
import banner from '../../Images/MainBanner.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import {useState} from 'react'

function home() {

  let top_h1="Avengers Infinity War";
  let top_text="The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan."

  const [isWatch,setIsWatch] = useState(true);

  const handleWatch = ()=>{
    setIsWatch(true);
  }

  const notHandleWatch = () => {
    setIsWatch(false)
  }

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
              <div className={isWatch?'watchnow hactive':'watchnow'} onClick={handleWatch}>
                Watch Now
              </div>
              <div className={!isWatch?'explore hactive':'explore'} onClick={notHandleWatch}>
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-body'>
        <div className='body-section'>
          <div className='ellipse-section'>
            <div className='pink-ellipse'></div>
            <div className='purple-ellipse'></div>
          </div>
          <div className='genre-bar'>
            <div className='genre gactive'>All</div>
            <div className='genre'>Action</div>
            <div className='genre'>Adventure</div>
            <div className='genre'>Comedy</div>
            <div className='genre'>Fantasy</div>
            <div className='genre'>Romance</div>
            <div className='genre'>Sci-fi</div>
            <div className='genre'>Thriller</div>
          </div>
          <div className='rec-tre-wrapper'>
            <div className='recommended'>
              <h1 className='rec-h1'>Recommended For You</h1>
              <div className='rec-list'>
                <Card no={0}/>
                <Card no={1}/>
                <Card no={2}/>
                <Card no={3}/>
              </div>
            </div>
            <div className='trending'>
              <h1 className='tre-h1'>Trending</h1>
              <div className='tre-list'>
                <Card no={4}/>
                <Card no={5}/>
                <Card no={6}/>
                <Card no={7}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default home