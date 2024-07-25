import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../assets/images/invest-us-right-img.png"
const InvestWithUs = () => {
  return (
    <section className="invest-us-sec">
      <div className="invest-us-con">
        <div className="left">
          <h3>Invest From any Device</h3>
          <h1>
            <span style={{ color: "#e11f1c" }}>Invest with</span> us from
            anywhere in the world,{" "}
            <span style={{ color: "#e11f1c" }}>using any device.</span>{" "}
          </h1>

          <p>
            Invest confidently with us, wherever you are. Our platform welcomes
            investors from every corner of the globe, accessible with just a few
            clicks. No training or licenses required – simply let your money
            work for you.
          </p>

          <button>Invest Now
          <FaArrowRight
          className="arrow-icon"
          color="#fff"
          style={{ marginLeft: "10px", position: "relative", top: "3px" }}
          />
          </button>
        </div>

        <div className="right">
            <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default InvestWithUs;
