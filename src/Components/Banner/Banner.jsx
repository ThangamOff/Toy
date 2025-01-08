import React from 'react'
import './Banner.css'
import dear from '../../Assets/Images/dearhome.jpg'

const Banner = () => {
  return (
    <>
      <div className='bannerContainer'>
        <div className='bannerContainerImg'>
            <img src={dear} alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner
