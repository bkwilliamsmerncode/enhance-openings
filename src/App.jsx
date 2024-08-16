import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Windows from "./Pages/Windows";
import Doors from "./Pages/Doors";
import Security from "./Pages/Security";
import Skylights from "./Pages/Skylights";
import Testimonials from "./Pages/Testimonials";
import Gallery from "./Pages/Gallery";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import GetPricing from "./Pages/GetPricing";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Windows" element={<Windows />} />
          <Route path="/Doors" element={<Doors />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Skylights" element={<Skylights />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/GetPricing" element={<GetPricing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
