import React from 'react'
import './Youngstershome.css'
import bae from '../../Assets/Images/bae.jpg'
import Youngster from '../../Reusable/Youngster/Youngster'
import young1 from '../../Assets/Images/young1.jpg'
import softDoggies from '../../Assets/Images/softDoggies.jpg'
import one from '../../Assets/Images/one.jpg'
import two from '../../Assets/Images/two.jpg'
import three from '../../Assets/Images/three.jpg'
import four from '../../Assets/Images/four.jpg'



const Youngstershome = () => {
  return (
    <>
    <div className='YoungstershomeContainer'>
      <div className='YoungstershomeContainer1'>
        <div className='YoungstershomeLeft'>
          <img src={bae} alt="" />
          <div className='YoungstershomeLeftContent display'>
            <h1>Special Offer</h1>
            <p>Praesent tristique magna sit amet purus gravida quis blandit.</p>
            <button className='cursor'>Shop Now</button>
          </div>
          <div className='YoungstershomeLeftContent1'>
            <div className='YoungstershomeLeftContentTime display'>
              <h1>445</h1>
              <p>Days</p>
            </div>
            <div className='YoungstershomeLeftContentTime display'>
              <h1>05</h1>
              <p>Days</p>
            </div>
            <div className='YoungstershomeLeftContentTime display'>
              <h1>45</h1>
              <p>Days</p>
            </div>
            <div className='YoungstershomeLeftContentTime display'>
              <h1>445</h1>
              <p>Days</p>
            </div>
          </div>
        </div>
        <div className='YoungstershomeRight'>
          <h1>Top Picks for Youngsters</h1>
          <p className='YoungstershomeRightp'>Justo eget magna fermentum iaculis.</p>
          <div className='YoungstershomeRightImgs'>
            <Youngster
            img = {young1}
            img2 ={softDoggies}
            />
            <Youngster
            img = {one}
            img2 ={two}
            />
            <Youngster
            img = {three}
            img2 ={four}
            />
            <Youngster
            img = {young1}
            img2 ={softDoggies}
            />
            <Youngster
            img = {one}
            img2 ={two}
            />
            <Youngster
            img = {three}
            img2 ={four}
            />
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Youngstershome
