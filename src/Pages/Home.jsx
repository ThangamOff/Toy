import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Toyprofile from '../Components/Toyprofile/Toyprofile'
import Shopcatedoryhome from '../Components/Shopcategoryhome/Shopcatedoryhome'
import Newarrivel from '../Components/Newarrivel/Newarrivel'
import Brandshome from '../Components/Brandshome/Brandshome'
import Youngstershome from '../Components/Youngstershome/Youngstershome'
import Exclusivehome from '../Components/Exclusivehome/Exclusivehome'
import Banner from '../Components/Banner/Banner'
import Newscarthome from '../Components/Newscarthome/Newscarthome'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Toyprofile/>
      <Shopcatedoryhome/>
      <Youngstershome/>
      <Banner/>
      <Exclusivehome/>
      <Newarrivel/>
      <Newscarthome/>
      <Brandshome/>
    </>
  )
}

export default Home
