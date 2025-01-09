import React from 'react'
import './Newscart.css'

const Newscart = (props) => {
  return (
    <>
      <div className='newsCartContainer'>
        <div className='newsCartImg'>
          <img src={props.img} alt="" className='cursor' />
        </div>
        <div className='newsCartContent'>
          <p>John Mathew | 14 Feb 2024</p>
          <h2 className='cursor'>{props.tittle}</h2>
          <p>{props.content}</p>
          <button className='cursor'>Read More</button>
        </div>
      </div>
    </>
  )
}

export default Newscart
