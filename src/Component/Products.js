import { NavLink } from 'react-router-dom'
import { Fragment,useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react"
import loader from '../Loading.json'
import '../CSS/style.css'
import BuyNow from './BuyNow'
import image2 from '../Image/2.png'
import image3 from '../Image/3.png'
import image4 from '../Image/4.png'
import image6 from '../Image/6.png'
import image7 from '../Image/7.png'
import image8 from '../Image/8.png'


function GetProducts(props)
{
    
    const naviagte=useNavigate()
    const [data,setData]=useState([]);
    const [productId,setProductId]=('')
    const [loading,setLoading]=useState(false)


function ProductList()
{
    setLoading(true)
  fetch("https://admin.grofkit.com/v1/product/list").then((res)=>res.json().then((items)=>{
    //   console.log(items.response.productList)
    //   console.log(items.response.productList[0].selling_price)
    setData(items.response.productList)
    setLoading(false)

}))  
// console.log(data)

//   saurabh
}
function SendData(item)
{
    // setProductId(item.productId)
   props.user(item)
   naviagte("/buy")
    // props.user.setter(item)
}

useEffect(()=>{ProductList()},[]);
    return(
   <Fragment>
{/* <button onClick={()=>ProductList()}>click</butt[on> */}
{loading&& <Lottie  style={{width:"500px",marginLeft:"450px",marginBottom:"100px"}} animationData={loader}/>}
{
    data&& data.map((item,i)=>
    <div key={i} className="dv2" onClick={()=>SendData(item)}>    
     <img src={item.productImage} style={{height:"200px"}}/>
     {/* <p>{item.brandName}</p> */}
     <p style={{color:"green"}}>Discount:{item.discount}</p>
     <p style={{color:"red"}}> price :{item.discount_price}</p>
     <p className="p1"><NavLink to="/buy" >{item.productName}</NavLink><br/>Selling price :<strike style={{color:"red"}}>{item.selling_price}</strike> </p>
    </div>)
}
    {
    //  data && data.map((item,i)=>
    //  <div key={i} className="dv2" onClick={()=>SendData(item)}>    
    //   <img src={item.productImage} style={{height:"200px"}}/>
    //   {/* <p>{item.brandName}</p> */}
    //   <p style={{color:"green"}}>Discount:{item.discount}</p>
    //   <p style={{color:"red"}}> price :{item.discount_price}</p>
    //   <p className="p1"><NavLink to="/buy" >{item.productName}</NavLink><br/>Selling price :<strike style={{color:"red"}}>{item.selling_price}</strike> </p>
    //  </div>)   
    }
   </Fragment>
        )
}export default GetProducts