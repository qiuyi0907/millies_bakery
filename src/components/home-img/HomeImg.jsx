import React from 'react'
import homeImg from '../../img/home.JPG'
import './home-img.styles.scss'

const HomeImg = () => {
  return (
    <div className='home-img-container'>
        <img src={homeImg} alt="home" className='home-img'/>
    </div>
  )
}

export default HomeImg