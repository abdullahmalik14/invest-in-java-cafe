import React, { useRef } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import img1 from "../assets/images/java-img1.jpeg";
import img2 from "../assets/images/java-img2.jpeg";
import img3 from "../assets/images/java-img3.jpeg";
import img4 from "../assets/images/java-img4.jpeg";
import img5 from "../assets/images/java-img5.png";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const JavaSection = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <div className="java-section">
      <div className="category-btn-prev-next">
        <GrFormPreviousLink
          onClick={previous}
          className="category-prev"
          
          color="#000"
        />
        <GrFormNextLink
          onClick={next}
          className="category-next"
         
          color="#000"
        />
      </div>
      <h1>
        They are <span style={{ color: "#e11f1c" }}>Java </span>
      </h1>

      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <div key={index} className="slider-item">
            <img src={img} alt={`Java ${index + 1}`} />
            <IoPlayCircleOutline
              className="play-button"
              
            />
            <p>
              By investing in Java Times Caffé, you become part of our family.
              This isn't just a coffee shop, it's your coffee shop.
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JavaSection;
