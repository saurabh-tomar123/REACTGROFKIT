
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
    LinkedinShareButton,
    LinkedinIcon
  } from "react-share";
import React,{useEffect,useState} from 'react';
import '../CSS/style.css'
import Header from '../Component/header'
function BuyNow(props){
    const [image,setImage]=useState('')
    const [itemId,setProductId]=useState()
    const [state,setState]=useState(true)
    const [data,setData]=useState([]);
    const [data2,setData2]=useState([])
    const [productData,setProductData]=useState({productName:'',discount:'',discount_price:'',selling_price:'',productDescription:''})
    const [list,setList]=useState(false)
    const item=props.Id
    
    function CallApi(){
        if(!props.Id.productId){
        console.log("=======>19",props.Id.productId)
       const productId=localStorage.getItem('item')
        console.log({productId})
        fetch("https://admin.grofkit.com/v1/product/details",{
            method:'POST',
            headers: {
             'Accept':"application/json",
             'Content-Type':"application/json"
             },
             body:JSON.stringify({productId})}).then((res)=>res.json().then((result)=>
             {
                console.log(result)
                setImage(result.response.productImages[0].productImage)
                CallAgain()
                SendData()
            //   if(result.response?.message?.successMessage){
            //     toast.success(result.response.message.successMessage)
            //   }
            //    else if(result.error?.errorMessage){
            //     toast.error(result.error.errorMessage)
            //    }
             }))
        }
        else{
          const productId=props.Id.productId
          fetch("https://admin.grofkit.com/v1/product/details",{
            method:'POST',
            headers: {
             'Accept':"application/json",
             'Content-Type':"application/json"
             },
             body:JSON.stringify({productId})}).then((res)=>res.json().then((result)=>
             {
                console.log(result)
              setImage(result.response.productImages[0].productImage)
              SendData()
             }))
    }  
        }
        
    useEffect(()=>{CallApi()},[])
    
    function ProductList()
{
  fetch("https://admin.grofkit.com/v1/product/list").then((res)=>res.json().then((items)=>{
    console.log(items.response)
    setData(items.response.productList)
    
}))  


  
}
   useEffect(()=>{ProductList()},[])

  //  useEffect(()=> { setTimeout(() => {ProductList()},1000) },[])
  function SendData(item)
{
  console.log("==87===>",item)
  setProductId(item.productId)
  setImage(item.productImage)
  setProductData({...productData,productName:item.productName
    ,discount:item.discount
    ,discount_price:item.discount_price,
    selling_price:item.selling_price,
    productDescription:item.productDescription
  })
   localStorage.setItem('item',item.productId)
  console.log(productData.productName)
  setState(!state)
  CallAgain()
}
function CallAgain(){
        
  const productId=localStorage.getItem('item')
  console.log({productId})
      fetch("https://admin.grofkit.com/v1/product/details",{
          method:'POST',
          headers: {
           'Accept':"application/json",
           'Content-Type':"application/json"
           },
           body:JSON.stringify({productId})}).then((res)=>res.json().then((result)=>
           {
              console.log("====80=>",result)
              SendData()
            // console.log(result.response.productImages[0].productImage)
            // setImage(result.response.productImages[0].productImage)
          //   if(result.response?.message?.successMessage){
          //     toast.success(result.response.message.successMessage)
          //   }
          //    else if(result.error?.errorMessage){
          //     toast.error(result.error.errorMessage)
          //    }
           }))
  }
    return(
        <div>
          <Header />
            <h1>Buy  page</h1>
            
          <div >{ image && <img src={image} style={{height:"400px",position:"absolute",left:"0px"}}/>}
             
              {
               state? 
              <div style={{width:"400px",width: "400px",position: "absolute",left: "550px",top:"175px"}}>
              <p> price :{item.discount_price}</p>
              <p className="p1">{item.productName}<br/>Selling price :<strike style={{color:"red"}}>{item.selling_price}</strike> </p> 
              <p>product Description :{item.productDescription}</p>
              <button style={{border:"2px solid red",borderRadius:"15px",color:"green",backgroundColor:"yellow",width:"150px"}} onClick={()=>toast.success("Added Successfully")}>Add to cart</button>
              <button style={{border:"2px solid red",borderRadius:"15px",color:"green",backgroundColor:"yellow",width:"150px",marginLeft:"10px"}}>Buy Now</button>
              </div>:
              <div style={{width:"400px",width: "400px",position: "absolute",left: "350px",top:"175px"}}>
              <p> price :{productData.discount_price}</p>
              <p className="p1">{productData.productName}<br/>Selling price :<strike style={{color:"red"}}>{productData.selling_price}</strike> </p> 
              <p>product Description :{productData.productDescription}</p>
              <button style={{border:"2px solid red",borderRadius:"15px",color:"green",backgroundColor:"yellow",width:"150px"}} onClick={()=>toast.success("Added Successfully")}>Add to cart</button>
              <button style={{border:"2px solid red",borderRadius:"15px",color:"green",backgroundColor:"yellow",width:"150px",marginLeft:"10px"}}>Buy Now</button>

              </div>
              }
              
              <div style={{position: "absolute",top:"450px"}}>
              {
     data && data.map((item,i)=>
     <div key={i} className="dv6" >    
      <img src={item.productImage} style={{height:"200px"}}/>
      {/* <p>{item.brandName}</p> */}
      <p style={{color:"green"}}>Discount:{item.discount}</p>
      <p style={{color:"red"}}> price :{item.discount_price}</p>
      <p className="p1"><NavLink to="/buy" onClick={()=>SendData(item)}>{item.productName}</NavLink><br/>Selling price :<strike style={{color:"red"}}>{item.selling_price}</strike> </p>
     </div>)   
    }
              </div>
     <div style={{position: "absolute",top:"450px"}}>
       
              </div>
            </div> 

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
  <div>
    {
    productData &&  (
    <Helmet>
      {/* {`${productData.title}`} put it place of grofkit */}
        <title>grofkit</title>
                                          {/* {productData.description} */}
      <meta name="description" content="server side rendoring by saurabh" />

      <meta property="og:title" content={productData.productImages?.productId} />

      <meta property="og:image" content={productData.productImages?.productImage} />
      <meta
        property="og:url"
        content={window.location.href }
      />
     <meta name="twitter:card"  content="summary_large_image" />

<meta
  property="og:description"
  content="Offering tour packages for individuals or groups."
/>
<meta property="og:image" content={productData.productImages?.productImage}/>
<meta property="og:site_name" content="European Travel, Inc." />
<meta name="twitter:image" content={productData.productImages?.productImage} />
    </Helmet>
    )}
    <div style={{position:"absolute",left: "648px",top: "379px",display:"inline-flex"}}>
 <img style={{width:"30%"}} src={productData.productImages?.productImage}/>
 <FacebookShareButton style={{margin:"10px"}} url={window.location.href}><FacebookIcon size={40} round/></FacebookShareButton>
  <TwitterShareButton style={{margin:"10px"}} url={window.location.href}><TwitterIcon size={40} round /></TwitterShareButton>
  <LinkedinShareButton style={{margin:"10px"}} url={window.location.href}><LinkedinIcon size={40} round /></LinkedinShareButton>
  </div>
</div>
  </div>
  
  
    )
}export default BuyNow;