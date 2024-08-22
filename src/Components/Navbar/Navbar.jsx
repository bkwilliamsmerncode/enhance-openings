import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

const nav = useNavigate();

  return (
    <>
      <div className="main">
        <div onClick={() => nav('/')} className="nav-left">
          <div className="logo">ENHANCE</div>
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
    </>
  );
};

export default Navbar;
