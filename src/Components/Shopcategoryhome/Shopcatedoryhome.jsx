import React from 'react'
import './Shopcategoryhome.css'

import Shopcategory from '../../Reusable/Shopcategory/Shopcategory'
import squeaky from '../../Assets/Images/squeaky.webp' 
import melody from '../../Assets/Images/melody.webp'
import travel from '../../Assets/Images/travel.webp'
import wooden from '../../Assets/Images/wooden.webp'
import pull from '../../Assets/Images/pull.webp'

import Category from '../../Reusable/Category/Category'
import category1 from '../../Assets/Images/category1.jpg'
import category2 from '../../Assets/Images/category2.jpg'
import category3 from '../../Assets/Images/category3.jpg'

import Shopage from '../../Reusable/Shopage/Shopage'
import hov from '../../Assets/Images/shagehov1.png'

const Shopcatedoryhome = () => {
  return (
    <>
        <div className='shopcatedoryhomeContainer'>
                <h1 className='display padding10px'>Shop By Category</h1>
            <div className='shopcatedoryhomeContent display'>
                <Shopcategory
                squeaky={squeaky}
                tittle ="Squeaky Toys"
                />
                <Shopcategory
                squeaky={melody}
                tittle ="Melody Mates"
                />
                <Shopcategory
                squeaky={travel}
                tittle ="Travel Treasures"
                />
                <Shopcategory
                squeaky={wooden}
                tittle ="Wooden Wonders"
                />
                <Shopcategory
                squeaky={pull}
                tittle ="Pull Toys"
                />
            </div>
        
            <div className='Shopcatedoryhome2 display'>
                <Category
                img = {category1}
                tittle ="Wood toys for your kids"
                off = "Get 20% flate your first purchase"
                />
                <Category
                img = {category2}
                tittle ="Early black friday specials"
                off = "Big discount 50% off on all order"
                />
                <Category
                img = {category3}
                tittle ="The best thing for kids"
                off = "Special offer gift voucher"
                />
            </div>
                <h1 className='display padding10px'>Shop By Age</h1>
                <div className='Shopcatedoryhome3 display'>
                    <Shopage
                    Img = {hov}
                    age = "0-12"
                    years = "months"
                    />
                    <Shopage
                    Img = {hov}
                    age = "1-2"
                    years = "years"
                    />
                    <Shopage
                    Img = {hov}
                    age = "3+"
                    years = "years"
                    />
                    <Shopage
                    Img = {hov}
                    age = "5+"
                    years = "years"
                    />
                </div>
        </div>
       
    </>
  )
}

export default Shopcatedoryhome
