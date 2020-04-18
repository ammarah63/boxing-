import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';

class Sliders extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 500
    };
  
    return (
      <Slider {...settings}>
        <div className="image">
          <img alt='slide1' width="100%" height="100%"  src={slide1}/>
        </div>
        <div className="image">
        <img alt='slide2' width="100%" height="100%"  src={slide2}/>
        </div>
        <div className="image">
        <img alt='slide3' width="100%" height="100%"  src={slide3}/>
        </div>
        <div className="image">
        <img alt='slide4' width="100%" height="100%"  src={slide4}/>
        </div>
        <div className="image">
        <img alt='slide5' width="100%" height="100%"  src={slide5}/>
        </div>
      </Slider>
    );
  }
}
export default Sliders;