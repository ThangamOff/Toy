import React from 'react'
import './Youngster.css'
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { LuArrowLeftRight } from "react-icons/lu";

const Youngster = (props) => {
  return (
    <>
      <div className='youngsterContainer display'>
        <div className='youngsterCart display'>
            <div className='youngsterImg display cursor padding10px'>
                <img src={props.img} alt="" className='youngsterImg1 padding10px' />
                <img src={props.img2} alt="" className='youngsterImg2 padding10px' />
                <div className='youngsterImgSideBar padding10px'>
                  <p className='youngsterImgSideBar1 display'><IoIosHeartEmpty /></p>
                  <p className='youngsterImgSideBar1 display'><LuArrowLeftRight /></p>
                  <p className='youngsterImgSideBar1 display'><BsHandbag /></p>
                </div>
            </div>
            <div className='youngsterContent display'>
                <p className='cursor'>Wooden Ponny</p>
                <p>Rs. 650.00</p>
            </div>
            <div className='youngsterColor display cursor'>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Youngster
