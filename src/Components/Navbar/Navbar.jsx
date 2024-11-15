import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo3 from "../../Assets/logo3.png"
import logo4 from "../../Assets/logo4.png"
import { GiHamburgerMenu } from "react-icons/gi";

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePageClick = (page, route) => {
    setActivePage(page);
    setIsOpen(false); // Close the modal
    navigate(route); // Navigate to the route
  };

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img className='imglogo' src={logo3} alt='logo'/> 
          <img className='imglogo1' src={logo4} alt='logo'/> 
        </div>
        <ul className="nav-links">
          {[
            { page: 'Homepage', route: '/' },
            { page: 'Contact Us', route: '/ContactUs' },
            { page: 'Doors', route: '/Doors' },
            { page: 'Gallery', route: '/Gallery' },
            { page: 'Get Pricing', route: '/GetPricing' },
            { page: 'Security', route: '/Security' },
            { page: 'Service', route: '/Service' },
            { page: 'Skylights', route: '/Skylights' },
            { page: 'Testimonials', route: '/Testimonials' },
            { page: 'Windows', route: '/Windows' }
          ].map((item, index) => (
            <li
              key={index}
              className={`nav-item ${activePage === item.page ? 'active' : ''}`}
              onClick={() => handlePageClick(item.page, item.route)}
            >
              {item.page}
            </li>
          ))}
        </ul>
        <div  onClick={toggleMenu}>
        <GiHamburgerMenu className='icon' />
        </div>
        <button className="cta-button">Sign Up</button>
        
      </nav>

      {isOpen && (
        <div className="nav-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleMenu}>✖</button>
            <ul className="modal-links">
              {[
                 { page: 'Homepage', route: '/' },
                 { page: 'Contact Us', route: '/ContactUs' },
                 { page: 'Doors', route: '/Doors' },
                 { page: 'Gallery', route: '/Gallery' },
                 { page: 'Get Pricing', route: '/GetPricing' },
                 { page: 'Security', route: '/Security' },
                 { page: 'Service', route: '/Service' },
                 { page: 'Skylights', route: '/Skylights' },
                 { page: 'Testimonials', route: '/Testimonials' },
                 { page: 'Windows', route: '/Windows' }
              ].map((item, index) => (
                <li
                  key={index}
                  className={`modal-item ${activePage === item.page ? 'active' : ''}`}
                  onClick={() => handlePageClick(item.page, item.route)}
                >
                  {item.page}
                </li>
              ))}
            </ul>
            <button className="cta-button modal-button">Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;