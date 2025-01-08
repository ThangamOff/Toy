import React from 'react'
import './Newarrivel.css'
import Youngster from '../../Reusable/Youngster/Youngster'
import three from '../../Assets/Images/three.jpg'
import four from '../../Assets/Images/four.jpg'
import arr from '../../Assets/Images/arrivalss.png'

const Newarrivel = () => {
  return (
    <>
    <div className='NewarrivelContainer'>
        <div className='NewarrivelHeader display'>
            <h1>New Arrivels</h1>
            <p>Cras dictum metus in uam vulpu commodo.</p>
        </div>
        <div className='NewarrivelCart display'>
                <Youngster
                img = {four}
                img2 ={three}
                tittle ="Wooden Ponny"
                price ="Rs. 650.00"
                />
                <Youngster
                img = {three}
                img2 ={four}
                tittle ="Soft Doggies"
                price ="Rs. 40.00"
                />
                <Youngster
                img = {four}
                img2 ={three}
                tittle ="Picky Bank"
                price ="Rs. 40.00"
                />
                <Youngster
                img = {three}
                img2 ={four}
                tittle ="Giraffe Toy"
                price ="Rs. 60.00"
                />
                <Youngster
                img = {four}
                img2 ={three}
                tittle ="Dear Doll"
                price ="Rs. 65.00"
                />
                <Youngster
                img = {three}
                img2 ={four}
                tittle ="Cuddly Monkey"
                price ="Rs. 50.00"
                />
        </div>
        <div className='NewarrivelBottomContent'>
            <img src={arr} alt="" />
            <div  className='NewarrivelBottomContent1'>
                <h1>Greatest prices and deals save 20%off baby</h1>
                <button className='cursor'>Shop Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Newarrivel
