import React from "react";
import Slider from "react-slick";
import img1 from "../assets/images/sec-2-slider-img1.png"
import img2 from "../assets/images/sec-2-slider-img2.jpeg"
import img3 from "../assets/images/sec-2-slider-img3.jpg"
import img4 from "../assets/images/sec-2-slider-img4.webp"
import img5 from "../assets/images/sec-2-slider-img5.jpeg"
const  SectionTwoSlider = ()=> {
 
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
    <div className="slider-container">
      
    <Slider {...settings}>
    <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Carlos</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$500</span>
        <p>2 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper wrapper-2">
    <div className="card-left">
      <img src={img2} alt="" />
    </div>
    <div className="card-right">
      <h3>Gabriel Cruz Fraire</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$1000</span>
        <p>2 days ago</p>
      </div>
    </div>
  </div>


  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Loretta Madero</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$20</span>
        <p>3 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img3} alt="" />
    </div>
    <div className="card-right">
      <h3>16armand11</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$220</span>
        <p>3 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper wrapper-2">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Claudia Yoon</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$7000</span>
        <p>4 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Allan_jrcg</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$60</span>
        <p>5 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img  src={img4} alt="" />
    </div>
    <div className="card-right">
      <h3>Ruben Dario</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$1000</span>
        <p>6 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper wrapper-2">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>16armand11</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$220</span>
        <p>3 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Loretta Madero</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$200</span>
        <p>7 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Loretta Madero</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$20</span>
        <p>7 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper wrapper-2">
    <div className="card-left">
      <img src={img5} alt="" />
    </div>
    <div className="card-right">
      <h3>Enrique Lazalde</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$2500</span>
        <p>9 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Jaime Lopez</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$500</span>
        <p>9 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Carlos </h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$1000</span>
        <p>12 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper wrapper-2">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Elisa</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$5000</span>
        <p>15 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>MikeOrte</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$10000</span>
        <p>$21 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Lusma</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$700</span>
        <p>23 days ago</p>
      </div>
    </div>
  </div>

  <div className="wrapper wrapper-2">
    <div className="card-left">
      <img src={img1} alt="" />
    </div>
    <div className="card-right">
      <h3>Loretta Madero</h3>
      <p>Has invesed in java Times caffe #2 Vinedos</p>
      <div className="card-invest-price">
        <span>$20</span>
        <p>3 days ago</p>
      </div>
    </div>
  </div>
    </Slider>
  </div>
  );
}

export default SectionTwoSlider;
