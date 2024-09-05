import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

const nav = useNavigate();

  return (
    <>
    <div id="navbarMain">
      <div className="navMainInner">
        <div className="navLeft">
          <div className="logoTop"><p>ENHANCE</p></div>
          <div className="logoBottom">
            <div className="logoBottomLeft"><p>openings</p></div>
            <div className="logoBottomMiddle"><p> | </p></div>
            <div className="logoBottomRight">
              <div className="logoBottomRightTop"><p>WINDOWS,</p></div>
              <div className="logoBottomRightBottom"><p>DOORS & MORE</p></div>
            </div>
          </div>
        </div>
        <div className="navRight">
          <div className="navRightUpper"></div>
          <div className="navRightLower"></div>
        </div>
      </div>
    </div>
      {/* <div className="main">
      <div className="logo">
        <div className="logoleft"><p>ENHANCE</p></div>
        <div className="logoright"><p>Serving Central and Southern Arizona 520-886-1602</p></div>
      </div>
      <div className="navbottom">
        <div onClick={() => nav('/')} className="nav-left">
          
          <div className="logobottom">
          <div className="website">openings</div>
          <div className="HR">  |  </div>
          <div className="webright">
            <div> WINDOWS, </div>
            <div> DOORS & MORE</div>
          </div>
          </div>
        </div>
        <div className="nav-right">

            <div onClick={() => nav('/Windows')}><p className="pages">Windows</p></div>
          
          
            <div onClick={() => nav('/Doors')}><p className="pages">Doors</p></div>
          
          
            <div onClick={() => nav('/Security')} ><p className="pages">Security</p></div>
          
          
            <div onClick={() => nav('/Skylights')} ><p className="pages">Skylights</p></div>
          
          
            <div onClick={() => nav('/Testimonials')} ><p className="pages">Testimonials</p></div>

            <div onClick={() => nav('/Gallery')} ><p className="pages">Gallery</p></div>

            <div onClick={() => nav('/Service')} ><p className="pages">Service</p></div>

            <div onClick={() => nav('/ContactUs')} ><p className="pages">Contact Us</p></div>

          

            <button onClick={() => nav('/GetPricing')} className="GP">GET PRICING</button>
      
        </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
