import React from 'react'
import './Shopcategory.css'

const Shopcategory = (props) => {
  return (
    <>
      <div className='shopCategoryContainer'>
        <div className='shopCategoryToys display'>
           <div className='shopCategoryCart display cursor'>
                <img src={props.squeaky} alt="" />
           </div>
            <p className='cursor'>{props.tittle}</p>
        </div>
      </div>
    </>
  )
}

export default Shopcategory
