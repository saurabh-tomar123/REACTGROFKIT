import '../CSS/style.css'
import auth from '../Component/Firebase'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import React,{useState} from 'react'
import image5 from '../Image/5.png'
function Myprofile()
{
    const [name1,setName]=useState('')
    const [email2,setEmail]=useState('')
    const [rawid,setRawId]=useState('')
    const [refer3,setRefer]=useState('')
    const [mobile,setMobile]=useState('')
    const provider=new GoogleAuthProvider()

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
      console.log(i.response.data)
      setName(i.response.data.fullName)
      setEmail(i.response.data.email)
      setMobile(i.response.data.mobileNo)
      setRefer(i.response.data.referralCode)
    })
   }
   function directLogin()
   {
    signInWithPopup(auth,provider).then((res)=>{
        console.log(res)
        setName(res._tokenResponse.fullName)
        setEmail(res._tokenResponse.email)
        setRawId(res.user.reloadUserInfo.providerUserInfo[0].rawId)

        const email=res._tokenResponse.email
        const authServiceProviderType=1
        const authServiceProviderId=res.user.reloadUserInfo.providerUserInfo[0].rawId
        const data=({email,authServiceProviderType,authServiceProviderId})
        console.log("=================>",data)
        // change the url for login with firebase
        fetch("https://admin.grofkit.com/v1/api/user/social/login",{ 
        method:'POST',
       headers: {
        'Accept':"application/json",
        'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    }).then((res) => res.json()).then((i)=>{
      console.log(i)
    })
    })
   }
   
    return(
        <div style={{position: "absolute",left: "481px",marginTop:"10px"}}>
            <button onClick={()=>directLogin()} disabled>click to login</button>
           
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

         <button  onClick={()=>socialLogin()}>login</button>

         

        </div>
           
        </div>
    )
}export default Myprofile;