import React from 'react'
import './Category.css'
const Category = (props) => {
  return (
    <>
        <div className='categoryContainer display'>
            <div className='categoryContent display'>
              <img src={props.img} alt="" />
                <div className='categoryContent1 display'>
                    <h2>{props.tittle}</h2>
                    <p>{props.off}</p>
                    <button className='cursor'>Shop now</button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Category
