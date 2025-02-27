import React from "react";
import img from "../assets/images/benefits-center-img.png"
const BenefitsSection = () => {
  return (
    <div className="benefit-section-main">
      <h2>Our Benefits</h2>
      <h1>
        <span style={{ color: "#e11f1c" }}>Unlock</span> numerous benefits by
        investing <span style={{ color: "#e11f1c" }}>with us.</span>
      </h1>
      <div className="benefit-section-con">
        <div className="benefit-section-left">
          <div className="benefit-cart-left">
            <div className="number">1</div>
            <h4>
            Receive dividends
            </h4>
            <p>
            Earn a share of the profits  generated by our investments.
            </p>
          </div>

          <div className="benefit-cart-left benefit-cart-left-2">
            <div className="number">3</div>
            <h4>
            Exclusive store offers
            </h4>
            <p>
            Gain access to special  discounts and promotions at partner stores.
            </p>
          </div>

          <div className="benefit-cart-left benefit-cart-left-3">
            <div className="number">5</div>
            <h4>
            Join the JTC community
            </h4>
            <p>
            Become part of a supportive  network of like-minded  investors.
            </p>
          </div>
        </div>

        <div className="benefit-section-center">
                <img src={img} alt="" />
        </div>

        <div className="benefit-section-right">
        <div className="benefit-cart-right">
            <div className="number">2</div>
            <h4>
            Capital appreciation
            </h4>
            <p>
            Witness the potential increase  in the value of your shares  over time.
            </p>
          </div>

          <div className="benefit-cart-right benefit-cart-right-2">
            <div className="number">4</div>
            <h4>
            Earn JTC points
            </h4>
            <p>
            Accumulate points with each  investment, redeemable for  various rewards.
            </p>
          </div>

          <div className="benefit-cart-right benefit-cart-right-3">
            <div className="number">6</div>
            <h4>
            VIP event access
            </h4>
            <p>
            Enjoy complimentary passes to  store inaugurations and  exclusive events.
            </p>
          </div>

        </div>

       
      </div>
    </div>
  );
};

export default BenefitsSection;
