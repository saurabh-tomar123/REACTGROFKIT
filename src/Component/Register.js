import React,{useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Header from './header';
function Register(){
  const naviagte=useNavigate()
const [data,setData]=useState({fullName:"",email:"",password:"",inviteCode:"",mobileNo:"",deviceToken:""})
    function Hadndlechange(e){
        e.preventDefault()
        setData({...data,[e.target.name]:e.target.value,deviceType:1})
        console.log(data)   
    }
    function registration(e)
    {
        // e.preventDefault()
        fetch("https://admin.grofkit.com/v1/api/user/registration",{
            method:'POST',
            headers: {
             'Accept':"application/json",
             'Content-Type':"application/json"
             },
             body:JSON.stringify(data)}).then((res)=>res.json().then((result)=>
             {
              console.log(result)
              if(result.response?.message?.successMessage){
                toast.success(result.response.message.successMessage)
                setTimeout(() => {
                  naviagte("/login")
              }, 2000);
              }
               else if(result.error?.errorMessage){
                toast.error(result.error.errorMessage)
               }
               
               
             }))
    }
    return(
        <div>
          <Header/>
            <h1>User Registration</h1>
            <center>
            <form onSubmit={Hadndlechange} style={{ height:"400px",width:"400px",padding:"10px",backgroundColor:"aqua",border:"2px solid yellow",borderRadius:"20px"}}>
            <input type="text" style={{borderRadius:"10px"}} placeholder="enter FullNAme" name="fullName" value={data.fullName} onChange={(e)=>Hadndlechange(e)}/><br/><br/>
            <input type="email" style={{borderRadius:"10px"}} placeholder="enter Email " name="email" value={data.email} onChange={(e)=>Hadndlechange(e)}/><br/><br/>
            <input type="text" style={{borderRadius:"10px"}} placeholder="enter MobileNo" name="mobileNo" value={data.mobileNo} onChange={(e)=>Hadndlechange(e)}/><br/><br/>
            <input type="password"  style={{borderRadius:"10px"}} placeholder="enter Password" name="password" value={data.password} onChange={(e)=>Hadndlechange(e)}/><br/><br/>
            <input type="text" style={{borderRadius:"10px"}} placeholder="enter deviceToken" name="deviceToken" value={data.deviceToken} onChange={(e)=>Hadndlechange(e)}/><br/><br/>
            <input type="text" style={{borderRadius:"10px"}} placeholder="enter inviteCode" name="inviteCode" value={data.inviteCode} onChange={(e)=>Hadndlechange(e)}/><br/><br/>
            <button style={{border:"2px solid red",borderRadius:"15px",color:"green",backgroundColor:"yellow",width:"100px"}} onClick={()=>registration()}> Register</button><br/>
            </form> </center> 
            <Toaster toastOptions={{
    success: {
      style: {
        background: 'green',
        color:"white"
      },
    },
    error: {
      style: {
        background: 'white',
        color:'red'
      },
    },
  }} /></div>
    )
}
export default Register