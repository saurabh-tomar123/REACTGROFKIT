import React,{ useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from "react-router-dom";

import Product from '../Component/Products';
import Slider from '../Component/Slider';
import search from '../Image/1.png'
import Footer from './Footer';
function Header(props)
{
  const [list,setList]=useState(false)
  const [list2,setList2]=useState(false)
  const [data,setData]=useState([]);
  const [search,setSearch]=useState('')
  const [searchList,setSearcList]=useState([])
  const [name,setName]=useState('')
  const [name2,setName2]=useState(false)
  const [param,setParam]=useState("")
  const naviagte=useNavigate()
 async function categories()
  {
    // https://admin.grofkit.com/v1/category/list
    fetch("https://admin.grofkit.com/v1/category/list").then((res)=>{res.json().then((items)=>{
      console.log(items.response.CategoryList)
       setData(items.response.CategoryList)
       setList(!list)
      console.log("=====>",items.response.CategoryList)
    })})
      
  }
  
   function getter(e)
   {
    if( search.length >= 4){
      fetch(`https://admin.grofkit.com/v1/product?search=${search}`).then((res)=>res.json().then((items)=>{
        console.log(items.response.SearchList[0].productName)
        setSearcList(items.response.SearchList)
        setList2(!list2)
         
      }))
    }
   }
   function socialLogin()
   {
    let data={
      "email":"tsaurabh385@gmail.com",
      "authServiceProviderType":1,
      "authServiceProviderId":"108723471704656117953"
  }
      fetch("https://admin.grofkit.com/v1/api/user/social/login",{
        method:'POST',
       headers: {
        'Accept':"application/json",
        'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    }).then((res) => res.json()).then((i)=>{
      setName(i.response.data.fullName)
      setName2(true)
      console.log(i.response.data.fullName)
    })
   }
    return(
        <div className="App">
          
        <header style={{ backgroundColor:"#c0ff41",height:"80px",width:"100%"}}>
          <h1 style={{color:"green",textAlign:"left",paddingTop:"15px" }}>GrOfKiT</h1>
         <input className="search" type="search" placeholder="Search here..." value={search} onChange={(e)=>setSearch(e.target.value)}   />
         <NavLink style={{color:'blue',position:"absolute",top:"31px",right:"0px"}} onClick={()=>categories()}>Categories</NavLink>
         <NavLink to="/profile" style={{color:'blue',position:"absolute",top:"55px",right:"0px"}} >My Profile</NavLink>
        </header>
      {/* <Slider/> */}
      {/* <Product /> */}
      {/* <Footer/> */}
       <button className='bttn' onClick={()=>getter()}>Search</button>
     
       {
        //  name2?<h3 className='bttn2' onClick={()=>setName2(!name2)}>Welcome  {name}...</h3>:  <button className='bttn1' onClick={()=>socialLogin()}>socialLogin</button>
       }
       {/* <button  style={{marginTop:"1px"}} onClick={()=>socialLogin()}>socialLogin</button> */}
           <NavLink to="/register" className='bttn2'>Sign Up </NavLink>
           <NavLink to="/login" className='bttn3'>Log In </NavLink>
      {
      
      list &&
        <div className='list'>
       
        {
          data && data.map((items,i)=>
          <table key={i}>
            <tbody>
              <tr>
                <td> <Link to={`/category/${items.name}`} >{items.name}</Link> <img src={items.icon}style={{height:"50px"}}/></td> 
              </tr>
            </tbody>
          </table>
        
          )
        }
      </div>
      }

{
      
      list2 &&
        <div className='srchlist' >
       
        {
          searchList && searchList.map((items,i)=>
          <table>
            <tbody>
              <tr key={i}>
                <td><Link to={`/category/${items.productName}`} >{items.productName}</Link> <img src={items.productImage}style={{height:"50px"}}/></td> 
              </tr>
            </tbody>
          </table>
        
          )
        }
      </div>
      }
      
        </div>

    )
}export default Header