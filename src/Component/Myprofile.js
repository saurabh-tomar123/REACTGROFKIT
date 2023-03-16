import '../CSS/style.css'
import auth from '../Component/Firebase'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import React,{useState} from 'react'
import image5 from '../Image/5.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Myprofile()
{
    const [name1,setName]=useState('')
    const [email2,setEmail]=useState('')
    const [rawid,setRawId]=useState('')
    const [refer3,setRefer]=useState('')
    const [mobile,setMobile]=useState('')
    const [status,setStatus]=useState(false)
    const provider=new GoogleAuthProvider()
    const naviagte=useNavigate()
    function socialLogin()
   {
    alert("if you want to login call api in place of this alert in my profile Component")
    setTimeout(() => {
        naviagte("/")
    },1000);
   }
  
   
    return(
        <div style={{position: "absolute",left: "481px",marginTop:"10px"}}>  
        <div style={{border:"2px solid green",borderRadius:"20px",background:"yellowgreen",height:"400px",width:"400px"}}>
         <img src={image5} className="img5"/>
         <h6 style={{color:"blue"}}>My Profile</h6>
         <p style={{color:"blue", textAlign:"left",paddingLeft:"10px"}}>Name : {name1}</p>
         <p style={{color:"blue", textAlign:"left",paddingLeft:"10px"}}>Email : {email2}</p>
         <p style={{color:"blue", textAlign:"left",paddingLeft:"10px"}}>Mob  :  {mobile}</p>
         <p style={{color:"blue", textAlign:"left",paddingLeft:"10px"}}>My referral:  {refer3}</p>
         <p style={{color:"blue", textAlign:"left",paddingLeft:"10px"}}>My Order:  5</p>
         <p style={{color:"blue", textAlign:"left",paddingLeft:"10px"}}>Wishlist:  5</p>
         <p style={{color:"blue", textAlign:"left",paddingLeft:"10px"}}>Add to cart:  5</p>

         <Link  onClick={()=>socialLogin()}>login</Link>

         

        </div>
           
        </div>
    )
}export default Myprofile;