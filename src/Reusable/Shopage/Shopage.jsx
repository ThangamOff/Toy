import React from 'react'
import './Shopage.css'

const Shopage = (props) => {
  return (
    <>
      <div className='shopageContainer'>
        <div className='shopageImg cursor'>
            <img src={props.Img} alt="" />
            <div className='shopageContent display'>
                <p>{props.age}</p>
                <p>{props.years}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Shopage
