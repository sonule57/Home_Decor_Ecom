
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Decor from './Component/Decor';
import Lamp from './Component/Lamp';
import Sale from './Component/Sale';
import Cart from './Component/Cart';
import Footer from './Component/Footer';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import About from './Component/About';

import Wall from './Component/Wall';
// import Dining from './Component/Dining';

// import {CartProvider} from 'react-use-cart';
import { useState ,useEffect } from 'react';
const App=()=>{
  const [show, setShow] = useState(true);

  const[cart, setCart] = useState([]);

    // function
    const handleClick =(item) => {
        // console.log(item);
        // when the use click  then cart(usestate) push the data
        // cart.push(item);
        // console.log(cart);
        setCart(cart => [...cart, item]);
    };
    
    // handle change funtion here
    const handleChange =(item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;

      arr[ind].amount += d;
      // console.log(arr[ind].prices)

      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);


    }


    // useEffect(() =>{
    //   console.log("cart change");
    // },[cart]);

  
  return (
             
   <>
    
   <Router>
  
    <Navbar setShow={setShow} size={cart.lenght} />
    
    <Routes>
    
      <Route path='/'element={<Home/>}/>
      <Route path='/decor'element={<Decor/>}/>
      <Route path='/lamp' element={<Lamp/>}/>
      <Route path='/sale'element={<Sale/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
     
      <Route path='/wall-decor' element={<Wall/>}/>
      {/* <Route path='/dining-decor' element={<Dining/>}/> */}
      <Route path='/cart' element={<Cart/>}/>
     
    </Routes>
    
    <Footer/>
   </Router>
   
   </>
  );
}

export default App;
