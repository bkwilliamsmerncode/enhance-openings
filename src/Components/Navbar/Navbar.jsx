import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

const nav = useNavigate();

  return (
    <>
      <div className="main">
        <div className="nav-left">
          <div className="logo">LOGO</div>
          <div className="website">Website Name</div>
        </div>
        <div className="nav-right">

            <div onClick={() => nav('/')}><p className="pages">Page 1</p></div>
          
          
            <div onClick={() => nav('/Page2')}><p className="pages">Page 2</p></div>
          
          
            <div onClick={() => nav('/Page3')} ><p className="pages">Page 3</p></div>
          
          
            <div onClick={() => nav('/Page4')} ><p className="pages">Page 4</p></div>
          
          
            <div onClick={() => nav('/Page5')} ><p className="pages">Page 5</p></div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
