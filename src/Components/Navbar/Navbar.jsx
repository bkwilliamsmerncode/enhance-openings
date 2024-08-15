import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

const nav = useNavigate();

  return (
    <>
      <div className="main">
        <div className="nav-left">
          <div className="logo">ENHANCE</div>
          <div className="logobottom">
          <div className="website">OPENINGS</div>
          <div className="HR">  |  </div>
          <div className="webright">
            <div> WINDOWS, </div>
            <div> DOORS & MORE</div>
          </div>
          </div>
        </div>
        <div className="nav-right">

            <div onClick={() => nav('/')}><p className="pages">Windows</p></div>
          
          
            <div onClick={() => nav('/Page2')}><p className="pages">Doors</p></div>
          
          
            <div onClick={() => nav('/Page3')} ><p className="pages">Security</p></div>
          
          
            <div onClick={() => nav('/Page4')} ><p className="pages">Skylights</p></div>
          
          
            <div onClick={() => nav('/Page5')} ><p className="pages">Testimonials</p></div>

            <div onClick={() => nav('/Page5')} ><p className="pages">Gallery</p></div>

            <div onClick={() => nav('/Page5')} ><p className="pages">Service</p></div>

            <div onClick={() => nav('/Page5')} ><p className="pages">Contact Us</p></div>

            <button className="GP">GET PRICING</button>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
