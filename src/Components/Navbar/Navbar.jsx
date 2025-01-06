import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/Logo.png'
import { BsPlus } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { TfiHeart } from "react-icons/tfi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className='NavContainer'>
        <div className='NavLogo display'>
          <img src={logo} alt="" />
        </div>
        <div className='NavList display'>
          <p className='padding10px cursor'>Home</p>
          <div className='padding10px display cursor'>
            <p>Shop</p>
            <BsPlus className='display'/>
          </div>
          <p className='padding10px cursor'>Blog</p>
          <p className='padding10px cursor'>Contect</p>
          <div className='padding10px display cursor'>
            <p>Pages</p>
            <BsPlus className='display' />
          </div>
        </div>
        <div className='NavICons display'>
          <p className='padding10px cursor display'><LuSearch /></p>
          <p className='padding10px cursor display'><TfiHeart /></p>
          <p className='padding10px cursor display'><HiOutlineShoppingBag /></p>
          <div className='NavIconLanguage display padding10px cursor'>
            <p>English</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
