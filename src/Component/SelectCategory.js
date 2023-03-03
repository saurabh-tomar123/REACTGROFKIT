import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './header'
function SelectCategory(){
    const {productName}=useParams()
    console.log(productName)
    const [data,setData]=useState([])
    function getPrudctDetails()
    {
            fetch(`https://admin.grofkit.com/v1/product?search=${productName}`).then((res)=>res.json().then((items)=>{
            setData(items.response.SearchList)
            console.log(items)
               
            }))
          }
    function getData()
    {
    console.log(productName)
    }
    
    useEffect(()=>{getPrudctDetails()},[]);
    return(
        
                <div>
                    <Header/>
                {
       data && data.map((item,i)=>
       <div key={i} className="dv7" >    
        <img src={item.productImage} style={{height:"200px"}}/>
        {/* <p>{item.brandName}</p> */}
        <p style={{color:"green"}}>Discount:{item.discount}</p>
        <p style={{color:"red"}}> price :{item.discount_price}</p>
        <p className="p1"><NavLink to="/buy">{item.productName}</NavLink><br/>Selling price :<strike style={{color:"red"}}>{item.selling_price}</strike> </p>
       </div>)   
      }
                </div>
            
    )
}
export default SelectCategory