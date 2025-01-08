import React from 'react'
import './Newscarthome.css'
import Newscart from '../../Reusable/Newscart/Newscart'
import news1 from '../../Assets/Images/news1.png'
import news2 from '../../Assets/Images/news2.png'
import news3 from '../../Assets/Images/news3.png'

const Newscarthome = () => {
  return (
    <>
      <div className='newscarthomeContainer'>
        <div className='newscarthomeContent'>
            <h1>Latest News</h1>    
            <p>Erat Velit Scelerisque In Dictum.</p>
        </div>
        <div className='newscarthomeContent1'>
            <Newscart
            img = {news1}
            tittle = "Build World,Collect Pieces With Your Young Ones"
            content = "Ornare arcu odio ut sem nulla pharetra diam.Ultricies integer quis auctor elit sed vulputate..."
            />
            <Newscart
            img = {news2}
            tittle = "The Joy of Being a Parent: A Guide to Parenting"
            content = "Praesent elementum facilisis leo vel.Eget egestas purus viverra accumsan in nisl.Tortor at auctor..."
            />
            <Newscart
            img = {news3}
            tittle = "Cherishing Your Kids Special Day With Their Ultimate Faves"
            content = "Ac turpis egestas sed tempus urna et pharetra.Ultrices tincidunt arcu non sodates.Lacus vestibulum..."
            />
        </div>
      </div>
    </>
  )
}

export default Newscarthome
