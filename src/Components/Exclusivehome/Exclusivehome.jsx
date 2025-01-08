import React from 'react'
import './Exclusivehome.css'
import child from '../../Assets/Images/child.png'
import Exclusivecollection from '../../Reusable/Exclusivecollection/Exclusivecollection'
import ex1 from '../../Assets/Images/exclusive1.png'
import ex2 from '../../Assets/Images/exclusive2.png'
import ex3 from '../../Assets/Images/exclusive3.png'

const Exclusivehome = () => {
  return (
    <>
    <div className='exclusiveHomeContainer'>
        <div className='exclusiveHomeLeft'>
            <img src={child} alt="" />
        </div>
        <div className='exclusiveHomeRight display'>
            <div className='exclusiveHomeRightContent'>
                <h1>The Unique Appeal Of Toy Time Toys & Games</h1>
                <div className='exclusiveHomeRightContent1'>
                    <Exclusivecollection
                    img ={ex1}
                    tittle = "Exclusive Toy Collections"
                    content = "Enim diam vulputate ut pharetra. Adipiscing elit pellentesque habitant morbi tristique."
                    />
                    <Exclusivecollection
                    img ={ex2}
                    tittle = "Extensive Toy Assortment"
                    content = "Viverra maecenas accumsan lacus vel. Sed viverra ipsum nunc aliquet bibendum enim."
                    />
                    <Exclusivecollection
                    img ={ex3}
                    tittle = "Complimentary Shipping"
                    content = "Nibh praesent tristique magna sit amet.Lorem ipsum is simply dummy text printing typesetting industry."
                    />
                    
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Exclusivehome
