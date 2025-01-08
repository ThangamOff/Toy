import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shopcategory from './Reusable/Shopcategory/Shopcategory';
import Category from './Reusable/Category/Category';
import Shopage from './Reusable/Shopage/Shopage';
import Youngster from './Reusable/Youngster/Youngster';
import Toyprofile from './Components/Toyprofile/Toyprofile';
import Shopcatedoryhome from './Components/Shopcategoryhome/Shopcatedoryhome';
import Home from './Pages/Home';
import Youngstershome from './Components/Youngstershome/Youngstershome';
import Newarrivel from './Components/Newarrivel/Newarrivel';
import Exclusivecollection from './Reusable/Exclusivecollection/Exclusivecollection';
import Newscart from './Reusable/Newscart/Newscart';
import Fooder from './Components/Fooder/Fooder';

function App() {
  return (
    <div className="App">
      <Home/>
      <Fooder/>
      {/* <Newscart/> */}
      {/* <Navbar/>
      <Toyprofile/>
      <Shopcatedoryhome/>
      <Youngstershome/> */}
      {/* <Shopcategory/> */}
      {/* <Category/> */}
      {/* <Shopage/> */}
      {/* <Youngster/> */}
    </div>
  );
}

export default App;
