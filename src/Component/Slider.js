
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" height="417px"
          src="https://img.freepik.com/premium-photo/pastry-chef-with-desert-pudding-background_1134-18427.jpg?w=826"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"red"}}>Tasty Chickens's</h3>
          <p style={{color:"red"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"     height="417px"
          src="https://img.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg?w=826&t=st=1677046756~exp=1677047356~hmac=edb772e658333a6fe0564cd311086d77b410979df1fc9d104f022f43183e0435"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 style={{color:"yellow"}}>Tasty Spices </h3>
          <p style={{color:"yellowgreen"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="417px"
          src="https://img.freepik.com/premium-photo/shopping-cart-full-food-yellow-background-grocery-food-store-concept_708636-682.jpg?w=996"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 style={{color:"red"}}>Organic Food Collection </h3>

          <p style={{color:"red"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;