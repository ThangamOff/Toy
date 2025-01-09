import React from 'react'
import './Fooder.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { PiPhonePlusThin } from "react-icons/pi";

const Fooder = () => {
  return (
    <>
    <div className='FooderContainer'>
      <div className='FooderContentContainer display'>

        <div className='fooderTouch'>
          <h1>Get In Touch With Us</h1>
          <div className='fooderTouchInput'>
            <input type="text" placeholder='Enter your mail here' />
            <button className='cursor'>Subscribe</button>
          </div>
          <p>No Spam,we hate it more than you do.</p>
        </div>

        <div className='fooderLegal'>
          <h2>Legal</h2>
          <p>Faq</p>
          <p>Retailers</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>Terms of use</p>
        </div>

        <div className='fooderServices'>
          <h2>Services</h2>
          <p>Contact</p>
          <p>Careers</p>
          <p>24\7 Support</p>
          <p>News</p>
          <p>Delivery Info</p>
        </div>

        <div className='fooderContact'>
          <h2>Contact Us</h2>
          <div className='fooderContactContent'>
            <p><HiOutlineLocationMarker /></p>
            <p>No: 58 A, East Madison Street,Baltimore,MD,USA 4508</p>
          </div>
          <div className='fooderContactContent'>
            <p><IoMailOutline /></p>
            <p>info@example.com</p>
          </div>
          <div className='fooderContactContent'>
            <p><PiPhonePlusThin /></p>
            <p>+000-123-456-789</p>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Fooder
