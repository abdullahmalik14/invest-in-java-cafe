import React from "react";
import img1 from "../assets/images/partner-sec-img1.png";
import img2 from "../assets/images/partner-sec-img2.png";
import img3 from "../assets/images/partner-sec-img3.png";
import { FaArrowRight } from "react-icons/fa";
const PartnersSection = () => {
  return (
    <div className="partners-section-con">
      <h2>148 Partners and more joining every day</h2>

      <div className="partner-sec-main">
        <div className="partner-sec">
          <div className="img">
            <img src={img1} alt="" />
          </div>

          <div className="content">
            <h5>Investment Opportunity</h5>
            <p>
              Invest in Java Times Café and earn an annual profit of 10%, with
              the potential for more. Invest from $5,000 MXN and contribute to
              local and financial development.
            </p>
          </div>
        </div>

        <div className="partner-sec">
          <div className="img">
            <img src={img2} alt="" />
          </div>

          <div className="content">
            <h5>Expansion and Growth</h5>
            <p>
              Building on our solid track record, we are expanding to create
              this investment project, giving our customers and investors the
              opportunity to be part of our growth and success.
            </p>
          </div>
        </div>

        <div className="partner-sec">
          <div className="img">
            <img src={img3} alt="" />
          </div>

          <div className="content">
            <h5>Experience and Quality</h5>
            <p>
              {" "}
              We are a coffee shop with over 35 years of experience, dedicated
              to offering high-quality products, from coffee, teas, pastries,
              and much more, always maintaining ethical business practices.
            </p>
          </div>
        </div>
      </div>

      <button>
        Invest Now{" "}
        <FaArrowRight
          className="arrow-icon"
          color="#fff"
          style={{ marginLeft: "10px", position: "relative", top: "3px" }}
        />
      </button>
    </div>
  );
};

export default PartnersSection;
