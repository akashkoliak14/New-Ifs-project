import React from 'react';
import '../Styles/style.css'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import feature from '../img/home-slider/feature-2.png';
import feature2 from '../img/home-slider/feature-1.png';
import feature3 from '../img/home-slider/mobile-feature.png';
const Home = () => {
    return (
        <>
             <div id="main_slider" class="rev_slider" data-version="5.3.1.6">
                  <Carousel>
     
      <Carousel.Item>
        
        <Carousel.Caption  className='caption'>
        <h2>WE BUILD</h2> <h3>  YOUR  DREAM'S IN REALITY</h3>
          <p>We are leading company in web development<br/> and ERP system for your business.</p>
        </Carousel.Caption>
        <img
          className="d-block w-90"
          src={feature}
          alt="First slide"
        />
      </Carousel.Item>
     
       <Carousel.Item>
        
        <Carousel.Caption  className='caption'>
        <h2>Web Solution</h2> <h3> Provider</h3>
          <p>Our Range Of Services Suit Everyone,<br/> For Small And Medium Business To Big Corporates</p>
        </Carousel.Caption>
        <img
          className="d-block w-90"
          src={feature2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
       

        <Carousel.Caption   className='caption'>
        <h2>RESPONSIVE WEB </h2>
         <h3> DESIGN</h3>
          <p>Intuitive design is how we give the user new ideas</p>
        </Carousel.Caption>
        <img
          className="d-block w-90"
          src={feature3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>   
                    
            </div>
        </>
    );
}

export default Home;

