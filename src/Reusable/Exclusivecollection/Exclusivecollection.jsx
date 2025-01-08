import React from 'react'
import './Exclusivecollection.css'

const Exclusivecollection = (props) => {
  return (
    <>
      <div className='exclusivecollectionCart display'>
        <div className='exclusiveCartImgcontain'>
            <img src={props.img} alt="" />
        </div>
        <div className='exclusiveCartContent'>
            <h2>{props.tittle}</h2>
            <p>{props.content}</p>
        </div>
      </div>
    </>
  )
}

export default Exclusivecollection
