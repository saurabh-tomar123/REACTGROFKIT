const Home=(props)=>{
    // console.log("props data",props)
    return(
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home