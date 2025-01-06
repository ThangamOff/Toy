import React from 'react'
import './Toyprofile.css'
import toyprofile1 from '../../Assets/Images/toyprofile1.png'
import could from '../../Assets/Images/slider-cloud-bg.webp'

const Toyprofile = () => {
  return (
    <div className='toyProfileContainer display'>
        <div className='toyProfileOne display'>
            <div className='toyProfileOneContent'>
                <p>SEASONAL SALE - UP TO 60% OFF</p>
                <h1>Blankie Buddies</h1>
                <p>Price from : Rs.954</p>
                <button>Shop now</button>
            </div>
        </div>
        <div className='toyProfileTwo display'>
            <div className='toyProfileTwoImgCOntainer display'>
                <img src={toyprofile1} alt="" className='toyProfileTwoImg'/>
                {/* <img src={toyprofile1} alt="" className='toyProfileTwoImg'/> */}
            </div>
        </div>
    </div>
  )
}

export default Toyprofile
