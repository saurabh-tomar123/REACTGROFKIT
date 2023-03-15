import React,{useEffect, useState} from "react"
import { NavLink } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import image11 from '../Image/11.png';
import '../App.css'
import { useNavigate } from "react-router-dom";
import Header from "./header";
function Login(props){
    const naviagte=useNavigate()
    const [state,setState]=useState(false)
    const [mobileNo,setMobile]=useState('')
    const [password,setPassword]=useState('')
    
    function loginCred()
    {
        let data=({mobileNo,password,deviceType:1})
        fetch("https://admin.grofkit.com/v1/api/user/login",{
            method:"post",
            headers: {
                'Accept':"application/json",
                'Content-Type':"application/json"
                },
                body:JSON.stringify(data)}).then((res)=>res.json().then((result)=>
                {
                   console.log(result)
                   setState(true)
                  
                   if(result.response?.message?.successMessage){
                        toast.success(result.response.message.successMessage)
                       
                        setTimeout(() => {
                            naviagte("/")
                        }, 2000);
                       
                      }
                       else if(result.error?.errorMessage){
                        toast.error(result.error.errorMessage)
                       }
                }))
    }

  function setProps()
  {
    loginCred()
   {
    state &&
     props.data(state)
     console.log("login props",props.data)
   }
  }
    return(
        <div >
          <Header/>
          
            
            <img src={image11} className="img11"/>
           <center>
            <div  style={{marginTop:"20px" ,borderRadius:"20px", height:"200px",width:"300px", border:"2px solid red",backgroundColor:"silver"}}>

            
           <h1>Login page</h1>
            <input type="text"  style={{border:"2px solid green",borderRadius:"10px"}} placeholder="Enter Valid Mobile No."  value={mobileNo} onChange={(e)=>setMobile(e.target.value)}/><br/><br/>
            <input type="password" style={{border:"2px solid green",borderRadius:"10px"}} placeholder="Enter Valid Password. " value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
              <button  onClick={()=>setProps()} style={{border:"2px solid red",borderRadius:"15px",color:"green",backgroundColor:"yellow",width:"100px"}}> Login</button>
              </div>
            </center> 
            <Toaster toastOptions={{
    success: {
      style: {
        background: 'green',
      },
    },
    error: {
      style: {
        background: 'red',
      },
    },
  }} />
        </div>
    )
}export default Login