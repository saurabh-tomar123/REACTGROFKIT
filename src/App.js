import './App.css';
import Product from './Component/Products';
import Header from './Component/header';
import Slider from './Component/Slider';

import search from './Image/1.png'
import { BrowserRouter as Router, Route ,Link, Routes, BrowserRouter,Navigate,NavLink} from "react-router-dom";
import Myprofile from './Component/Myprofile';
import Register from './Component/Register';
import Login from './Component/Login';
import BuyNow from './Component/BuyNow';
 import React,{useState} from 'react';
import Footer from './Component/Footer';
import SelectCategory from './Component/SelectCategory';
function App() {
  const [data,setData]=useState([])
  const [category,setCategory]=useState('')
  function setter(item)
  { 
 setData(item)
  } 
  function getter(item)
  {
   setCategory(item)
  }
  
  return (
    <div className="App">
     
        {/* <header style={{ backgroundColor:"#c0ff41",height:"80px",width:"100%"}}>
          <h1 style={{color:"green",textAlign:"left",paddingTop:0"15px" }}>GrOfKiT</h1>
         <img src={search} className="img" /><input className="search" type="search" placeholder="Search here..."  />
         <button style={{width:"90px",color:'white',position:"absolute",top:"31px",right:"0px",background:"green",border:"2px solid yellow",borderRadius:"20px"}} >Search</button>
        </header> */}
        
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div><Header/><Slider/><Product user={setter}/><Footer/></div>}/>
      {/* <Route path="/product" element={<div></div>}/> */}
      <Route path="/profile" element={<div><Myprofile/></div>}/>
      <Route path="/register" element={<div><Register/></div>}/>
      <Route path="/login" element={<div><Login/></div>}/>
     
       <Route path="/buy" element={<div><BuyNow Id={data}/></div>}/>
       <Route path="/category/:productName" element={<div><SelectCategory data={getter}/></div>}/>

   
      
     



      {/* <Route path="/*" element={<div><Navigate to="/z"/></div>}/>/ */}
      {/* <Route path="/user/:name" element={<div><Routing /></div>}/> */}
      {/* <Route path="/navbar" element={<div><Navbar1 /></div>}/> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
