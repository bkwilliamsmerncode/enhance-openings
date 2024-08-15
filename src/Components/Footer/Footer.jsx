import React from "react";
import "./Footer.css";
import BBB from "../../Assets/BBB.png";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footerMain">
        <div className="footerInfo">
          <div className="footerLeft">
            <h2 style={{ marginLeft: "10px" }}>Enhance Openings Arizona</h2>
            <div className="logo">ENHANCE</div>
            <div className="logobottom">
              <div className="website" style={{ color: "white" }}>
                OPENINGS
              </div>
              <div className="HR"> | </div>
              <div className="webright">
                <div> WINDOWS, </div>
                <div> DOORS & MORE</div>
              </div>
            </div>
            <br />
            <div className="ft1">ROC# CR60-305859, CR65-316734</div>
            <br />
            <div className="ft1">We are Licensed, Bonded, & Insured</div>
            <br />
            <div className="ft2">BBB A+ Rating Enhance Openings</div>
            <br />
            <a
              className="link1"
              href="https://www.bbb.org/us/az/tucson/profile/window-door-installation/e-n-h-a-n-c-e-openings-llc-1286-20088619"
              target="_blank"
            >
              <div style={{ display: "flex" }}>
                <img src={BBB} alt="BBB icon" className="BBB" />
                <div style={{ marginTop: "10px" }}>
                  Better Business Bureau A+ Rating
                </div>
              </div>
            </a>
          </div>
          <div className="footerleftcenter">
            <div className="ftbtext1">ADDRESS</div>
            <div className="ftbtext2">3950 W Costco Dr Tucson, AZ 85741</div>
            <br />
            <div className="ftbtext1">EMAIL</div>
            <div className="ftbtext2" style={{ color: "#089893" }}>
              info@enhanceopenings.com
            </div>
            <br />
            <div className="ftbtext1">PHONE</div>
            <div className="ftbtext2">520-886-1602</div>
            <br />
            <a href="https://www.facebook.com/ENHANCEopenings/" target="_blank">
              <FaFacebookSquare
                style={{
                  color: "#09bab5",
                  width: "50px",
                  height: "50px",
                  marginLeft: "20px",
                }}
              />
            </a>
          </div>
          <div className="footerRight">
            <div>
              <h3>Hours:</h3>
            </div>
            <br />
            <div>Monday-Thursday: 8:00am–4:00pm</div>
            <br />
            <div>Friday: 8:00am–2:00pm</div>
            <br />
            <div>Saturday: 10:00am–3:00pm</div>
            <br />
            <div>Sunday: Closed</div>
            <br />
            <button className="rptbtn">REQUEST PRICING TODAY!</button>
          </div>
          <div className="footerend">
            <div className="footerinnerend">
              <div className="fnetitle">Free In-Home Pricing</div>
              <form action="" className="footform">
                
                <label htmlFor="" className="label1">Name (required)</label>
               
                
                <input type="text" className="input1"/>
                <label htmlFor="" className="label1">Phone (required)</label>
                <input type="number" className="input1"/>
                <label htmlFor="" className="label1">Email (required)</label>
                <input type="email" className="input1"/>
                <button className="subbtn1">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
