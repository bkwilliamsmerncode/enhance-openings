import React from "react";
import "./HomepageContent.css";

const HomepageContent = () => {
  return (
    <>
      <div className="xlscreens">
        <div className="xlsinner">
          <div className="page1Main">
            <div className="hero1">
              <div className="hero2">
              <div className="heroleft">
                <div className="herotext1"><h2>Illuminate Your Home With Velux</h2></div>
                <br />
                <div className="herotext2"><p>Get a 30% Federal Tax Rebate on</p></div>
                <div className="herotext2"><p>Skylights & Sun Tunnels</p></div>
              </div>
              <div className="heroright">
                <div className="fh">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageContent;
