import React from 'react'
import './Brands.css'

const Brands = (props) => {
  return (
    <>
      <div className='BrandsContainer'>
        <div className='BrandsImgcontain cursor'>
            <div className='BrandsImg'>
                <img src={props.img} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Brands
