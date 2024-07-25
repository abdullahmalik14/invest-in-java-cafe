import React from "react";
import img from "../assets/images/know-us-img.png";
const KnowUs = () => {
  return (
    <section className="know-us-sec">
      <div className="know-us-cont">
        <div className="left">
          <img src={img} alt="" />
        </div>

        <div className="right">
          <h1>
            <span style={{ color: " #e11f1c" }}>Know</span> Us
          </h1>
          <p>
            Antonio Leite, our founder, is a businessman with more than 35 years
            of international experience in coffee and social impact. His mission
            is to develop an inclusive and sustainable business model that
            benefits everyone. Thanks to these ideals, Java For Everyone has
            been created, a to. innovative project, which is currently already
            bearing fruits. Delve deeper, and fall in love with our project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
