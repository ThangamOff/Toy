import React from 'react'
import './Brandshome.css'
import Brands from '../../Reusable/Brands/Brands'
import brand1 from '../../Assets/Images/brand1.png'
import brand2 from '../../Assets/Images/brand2.svg'
import brand3 from '../../Assets/Images/brand3.png'
import brand4 from '../../Assets/Images/brand4.png'
import brand5 from '../../Assets/Images/brand5.png'


const Brandshome = () => {
  return (
    <>
    <div className='BrandshomeContainer'>
        <h1 className='Brandshomeheader display'>Top Brands</h1>
        <div className='BrandshomeContent'>
            <Brands
            img ={brand1}
            />
            <Brands
            img ={brand2}
            />
            <Brands
            img ={brand3}
            />
            <Brands
            img ={brand4}
            />
            <Brands
            img ={brand5}
            />
        </div>
    </div>
    </>
  )
}

export default Brandshome
