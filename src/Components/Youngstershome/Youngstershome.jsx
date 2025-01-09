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
              tittle ="Wooden Ponny"
              price = "Rs.650.00"
            />
            <Youngster
              img = {one}
              img2 ={two}
              tittle ="Soft Doggies"
              price = "Rs.620.00"
            />
            <Youngster
              img = {three}
              img2 ={four}
              tittle ="Pigky Bank"
              price = "Rs.450.00"
            />
            <Youngster
              img = {young1}
              img2 ={softDoggies}
              tittle ="Giraffe Toy"
              price = "Rs.657.00"
            />
            <Youngster
              img = {one}
              img2 ={two}
              tittle ="Lovely Dog stuffed"
              price = "Rs.620.00"
            />
            <Youngster
              img = {three}
              img2 ={four}
              tittle ="Deer Doll"
              price = "Rs.352.00"
            />
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Youngstershome
