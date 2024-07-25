import React from "react";
import img from "../assets/images/about-cart-img.png";
import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <section className="about-sec">
      <h1>
        About <span style={{ color: "#e11f1c" }}> Java Times Caffe</span>
      </h1>
      <p>
        Java Times Caffe goes beyond being a coffee shop chain. We are dedicated
        to offering high-quality products, from coffee to teas and pastries,
        while alway maintaining ethical business practices.
      </p>

      <div className="about-carts-main">
        <div className="about-carts">
          <div className="left">
            <div className="cart">
              <img src={img} alt="" />
              <h3>
                Our <span style={{ color: "#e11f1c" }}>Mission</span>{" "}
              </h3>
              <span>
                Our goal is global expansion, always committed to quality and
                ethics. Java de Todos is our initiative for the community to
                participate in our growth. By investing with us, you can
                contribute and receive dividends from our profits, being an
                 active part of our development.
              </span>
            </div>
          </div>
          <div className="right">
            <div className="cart">
              <img src={img} alt="" />
              <h3>
                Our <span style={{ color: "#e11f1c" }}>Milestones</span>{" "}
              </h3>
              <span>
                So far we have achieved the most difficult stage, the start- up
                and operation of the first branch, 1/300, to our pleasant
                surprise (we trust in our quality), we managed to make this a
                success, and that many people begin to know this great project
                and join
              </span>
            </div>
          </div>  
        </div>
      </div>

      <div className="invest-btn">
      <button>Invest Now
        <FaArrowRight
          className="arrow-icon"
          color="#fff"
          style={{ marginLeft: "10px", position: "relative"}}
        />
        </button>
      </div>
    </section>
  );
};

export default About;
