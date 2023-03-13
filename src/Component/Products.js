import { NavLink } from 'react-router-dom'
import { Fragment,useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

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


function ProductList()
{
  fetch("https://admin.grofkit.com/v1/product/list").then((res)=>res.json().then((items)=>{
    //   console.log(items.response.productList)
    //   console.log(items.response.productList[0].selling_price)
    setData(items.response.productList)
}))  
// console.log(data)

  
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
        // <>
        // <div className="dv1"> <img src={image2} className="img2" />
        // <p className="p1">Treseme Shampoo price :199<br/>you save 200 Rupee :<strike style={{color:"red"}}>499</strike> </p>
        // <button className="add" >Buy Now</button>
        // </div>
        // <div className="dv2"><img src={image3} className="img3" />
        // <p className="p2">Sugar price :40.kg<br/>you save 5 Rupee :<strike style={{color:"red"}}>45</strike></p>
        // <button className="add2" >Buy Now</button>
        // </div>
        // <div className="dv3"><img src={image4} className="img3" />
        // <p className="p2">Aashirwad Aatta price:469<br/>you save 31 Rupee :<strike style={{color:"red"}}>500</strike></p>
        // <button className='add3' >Buy Now</button>

        // </div>
        // <div className="dv1" style={{marginTop:"1px"}}> <img src={image6} className="img2" />
        // <p className="p1">Vasmati rice with Atta price :899<br/>you save 500 Rupee :<strike style={{color:"red"}}>1499</strike> </p>
        // <NavLink className="add" to="/buy">Buy Now</NavLink>
        // </div>
        // <div className="dv4"><img src={image7} className="img3" />
        // <p className="p2">Mix vegetables pack :299<br/>you save 200 Rupee :<strike style={{color:"red"}}>499</strike></p>
        // <button className="add2" onClick={()=>alert("Added successfully")}>Buy Now</button>
        // </div>
        // <div className="dv5"><img src={image8} className="img3" />
        // <p className="p2">Aashirwad Aatta price:469<br/>you save 31 Rupee :<strike style={{color:"red"}}>500</strike></p>
        // <button className='add3' onClick={()=>alert("Added successfully")}>Buy Now</button>

        // </div>
        // </>
   <Fragment>
{/* <button onClick={()=>ProductList()}>click</button> */}
    {
     data && data.map((item,i)=>
     <div key={i} className="dv2" onClick={()=>SendData(item)}>    
      <img src={item.productImage} style={{height:"200px"}}/>
      {/* <p>{item.brandName}</p> */}
      <p style={{color:"green"}}>Discount:{item.discount}</p>
      <p style={{color:"red"}}> price :{item.discount_price}</p>
      <p className="p1"><NavLink to="/buy" >{item.productName}</NavLink><br/>Selling price :<strike style={{color:"red"}}>{item.selling_price}</strike> </p>
     </div>)   
    }
   </Fragment>
        )
}export default GetProducts