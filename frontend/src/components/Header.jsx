import React, { useState } from 'react'
import logo from "../assets/images/logo.webp"
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
const Header = () => {
    const [activeBtn,setActiveBtn] = useState('EN');
    const [activeMenu,setActiveMenu] =useState("Home")
    const [isActive,setIsActive] = useState(false)
  return (
   <section className='header-section'>
        <header className='header-main'>
            <div className='header-left'>
                <img src={logo} alt="" />
            </div>

            <div className='header-center'>
                <ul>
                    <li onClick={()=>setActiveMenu('Home')} className={activeMenu === "Home"? "active" : ''}>Home</li>
                    <li onClick={()=>setActiveMenu('About')} className={activeMenu === "About"? "active" : ''}>About</li>
                    <li onClick={()=>setActiveMenu('Invest Now')} className={activeMenu === "Invest Now"? "active" : ''}>Invest Now</li>
                </ul>
            </div>

            <div className='header-right '>
                <div className='language-button'>
                    <button onClick={()=>setActiveBtn('EN')} className={activeBtn === "EN" ? "active" : ""}>EN</button>
                    <button onClick={()=>setActiveBtn('ES')} className={activeBtn === "ES" ? "active" : ""}>ES</button>
                </div>

                <div className='login-btn'>
                    <button>Login</button>
                </div>
            </div>


            <div className="hamburger-mobile">
          <ul>
            <li className="hamburger" onClick={() => setIsActive(!isActive)}>
              <GiHamburgerMenu />
            </li>
          </ul>
        </div>

               <div
          className={`mobile-nav ${isActive ? "active" : ""}`}
          id="mobile-hambargur"
        >
          <div className="one">
            <div className="one-left">
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "70%"}}
                />

              </a>
            </div>

            <div
              className={`one-right ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <RxCross2 color="#fff" />
            </div>
          </div>

          <div className="two" id="after-login-mobile">
            <ul>
                <li>Home</li>

                <li>About</li>

                <li>Invest Now</li>

                <li>Contact</li>
          
             <div className='mobileNav-btn'>

             <div className='login-btn'>
                    <button>Login</button>
                </div>
             <div className='language-button'>
                    <button onClick={()=>setActiveBtn('EN')} className={activeBtn === "EN" ? "active" : ""}>EN</button>
                    <button onClick={()=>setActiveBtn('ES')} className={activeBtn === "ES" ? "active" : ""}>ES</button>
                </div>
             </div>
           
            </ul>
          </div>
         
        </div>
        </header>

    <div className='join-banner-news'>
        <button>News</button>
        <marquee behavior= "scroll" direction="left">Available shares: 119,870,009. Each share is priced at 20 MXN with a 30% premium. Capital needed to open more stores: 2,397,400,180 MXN. Total amount financed for stores: 2,599,820 MXN.
             Currently, there is one store open out of a total of 300.</marquee>
    </div>
        
   </section>
  )
}

export default Header
