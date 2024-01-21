import React from "react";
import Card from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Sstyle = ()=>{
  return (
    <style>
      {`
      .slick-slide{
        margin:20px 0px;
      }
      .slick-center .slick-current{
        box-shadow: 0px 1px 15px gray;
        border-radius:15px;
      }
      
      .slider-carousel{
        margin:0px 0px 80px 0px;
        padding:60px 50px 0px 50px;
        // overflow:hidden;
        // background-color:orange;
       }
      .slider-carousel .carousel{
          margin:0px 30px;
      }
      @media screen and (max-width:960px){
        .slider-carousel{
          margin:140px 0px;
          padding:0px 0px;
         }
      }
      @media screen and (max-width:768px){
        .hero-section{
          padding: 0px 15px;
        }
        .hero-img img{
          width:100%;
          height:400px;
        }
      }
      `}
    </style>
  )
}

const Carousel = () => {
  const settings = {
    className: "center variable-width",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-carousel" >
      <Slider {...settings} className="slick-center">
      <div className="rounded-4"> 
        <Card className='carousel slick-slide'/>
      </div>
      <div className="rounded-4">
        <Card className='carousel slick-slide'/>
      </div>
      <div className="rounded-4">
        <Card className='carousel slick-slide'/>
      </div>
      <div className="rounded-4">
        <Card className='carousel slick-slide'/>
      </div>
      </Slider>
      <Sstyle/>
    </div>
  );
};

export default Carousel;