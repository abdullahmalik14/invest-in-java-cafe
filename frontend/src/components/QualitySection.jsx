import React from "react";
import rightImg from "../assets/images/quality-sec-right-img.jpeg"
import { FaArrowRight } from "react-icons/fa";
const QualitySection = () => {
  return (
    <div className="quality-section-main">
      <div className="quality-sec-con">
        <div className="quality-sec-left">
          <h2>Why Java Times Café?</h2>
          <h3>
            Committed <br /> to <span>Quality</span> and{" "}
            <span>Sustainability</span>
          </h3>
          <p>Invest in Java Times Café and secure your share of success! Earn
          dividends and share in our growth. We are revolutionizing economic
          equality, prioritizing the true drivers of the project. Java 300
          challenges the status quo with a fair and inclusive model. Take
          control, join our revolution, and secure your place in the future!
          </p>

          <button>Invest Now
          <FaArrowRight
          className="arrow-icon"
          color="#000"
          style={{ marginLeft: "10px", position: "relative", top: "3px" }}
        />
          </button>
        </div>

        <div className="quality-sec-right">
            <img src={rightImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
