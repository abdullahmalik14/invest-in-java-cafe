import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import img1 from "../assets/images/network-img-1.png"
import img2 from "../assets/images/network-img-2.png"
import instIcon from "../assets/images/inst-icon.png"
import fbIcon from "../assets/images/fb-icon.png"
import twitIcon from "../assets/images/twit-icon.png"
import youtubeIcon from "../assets/images/youtube-icon.png"
import tiktokIcon from "../assets/images/tiktok-icon.webp"
const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="footer-con">
        <div className="footer-left">
          <h1>Contact US</h1>
          <p>
            Welcome to Java Times Caffé! We prioritize both professionalism and
            fun, taking pride in delivering exceptional service. For contact
            details, visit our website or social media. Feel free to email us.
            We're here to help for an unforgettable Java Times Caffé experience!
          </p>

          <div className="location-sec">
            <FaLocationPin size="30px" style={{ color: "#fff" }} />
            <p>
              Calle Francisco Zarco 524 Ote, Colonia Centro Gomes Palacio
              Durango CODIGO POSTAL 35000
            </p>
          </div>

          <div className="phone-sec">
            <IoCallSharp style={{ color: "#fff" }} />
            <p>+52 871 123 6511</p>
          </div>

          <div className="mail-sec">
            <MdOutlineMailOutline style={{ color: "#fff" }} />
            <p>inversion@javatimescaffe.com</p>
          </div>
        </div>

        <div className="footer-center">
          <h1>OUR MISSION</h1>
          <p>
            Our mission is to be the leading Blockchain Technology provider for
            the specialty coffee industry. Committed to top-quality products and
            exceptional service, we aim to create opportunities for our
            employees and showcase our expertise. Our goal is to make a positive
            impact on the industry by demonstrating the value of Blockchain
            Technology, one customer at a time.
          </p>

          <h1>OUR VISION</h1>
          <p>
            Our plan: Open 300 new branches by inviting individuals over 18,
            including young people, employees, friends, suppliers, and coffee
            growers, to invest in Mexico. Join us in addressing challenges and
            promoting equitable wealth distribution. Let's build a brighter
            future together!
          </p>
        </div>

        <div className="footer-right">
          <h1>NEWSLETTER</h1>
          <p>
            Our aim is to empower Mexicans by offering shares in the Java Times
            Caffé 300-store project, providing a simple path for everyone to
            earn and join the coffee industry. Additionally, we're committed to
            developing future AI systems for an enhanced experience. Join us in
            shaping the future of coffee!
          </p>

          <div className="input-field">
            <input type="text" placeholder="your@gmail.com" />
            <button>SUBSCRIBE</button>
          </div>

          <div className="social-sec">
            <div className="networks">
              <h1>POWERED BY</h1>
              <p>Startup Networks Sapi de CV</p>
              <img src={img1} alt="" />
              <br />
              <img src={img2} alt="" />
            </div>
            <div className="social-links">
              <h1>Follow Us</h1>
              <br />

              <div className="social-icons">
              <img src={instIcon} alt="" />
              <img src={fbIcon} alt="" />
              <img src={twitIcon} alt="" />
              <br />
              <img src={youtubeIcon} alt="" />
              <img src={tiktokIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
