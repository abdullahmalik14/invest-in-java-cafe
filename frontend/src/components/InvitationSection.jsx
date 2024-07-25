import React from "react";
import bgImg from "../assets/images/invitation-bg-img.png";
import leftImg from "../assets/images/invitation-left-img.png";
import rightImg from "../assets/images/invitation-right-img.png";
import { IoPlayCircleOutline } from "react-icons/io5";
const InvitationSection = () => {
  return (
    <section className="invitation-sec">
      <h3>What makes Java Times Caffé so special?</h3>
      <h1>
        We always extend a <span style={{ color: "#e11f1c" }}>warm</span>{" "}
        invitation to our investors for our{" "}
        <span style={{ color: "#e11f1c" }}>inaugurations</span>.
      </h1>
      <div className="background">
        <img src={bgImg} alt="" />
        <br />
        <IoPlayCircleOutline
          color="#e11f1c"
          size={"60px"}
          className="play-btn"
         
        />
      </div>
      <div className="leftImg">
        <img src={leftImg} alt="" />
      </div>
      <div className="rightImg">
        <img src={rightImg} alt="" />
      </div>
      <br /> <br /> <br />
     
     <div className="text">
     <p>
        What is Java Times Caffé? Java Times Caffé is a coffee shop chain with
        over 35 years of experience, dedicated to providing high-quality
        products such as coffee, teas, and pastries. Our mission goes beyond
        just serving great coffee; we are committed to ethical business
        practices and sustainability.
        <br />
        <br />
        We have launched Java 300, an innovative investment project that allows
        our customers and investors to earn annual profits and be part of our
        growth and success. This project prioritizes economic equality and
        inclusivity, creating opportunities for those who support the growth of
        the business.
        <br /><br />
         By investing in Java Times Caffé, you contribute to local
        and financial development, ensuring that everyone involved has a stake
        in the future of the company. Join us, take control, and be a part of
        our revolution!
      </p>
     </div>
    </section>
  );
};

export default InvitationSection;
