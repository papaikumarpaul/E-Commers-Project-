import React from 'react';
import arrow_icon from '../Assets/arrow.png';
import hand_icon from '../Assets/hand_icon.png';
import hero_img from '../Assets/hero_image.png';
import './Hero.css';
 const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
            <div className='hand-hand-icon'>
        <p>new</p>
        <img src={hand_icon} alt=""/>
        </div>
        <p>colections</p>
        <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''/>
            </div>
        </div>
       <div className="hero-right">
        <img src={hero_img} alt=''/>
       </div>
    </div>
  )
}

export default Hero
