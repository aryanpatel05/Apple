import React from "react";
import "../styles/WhatsInBox.css";

const WhatsInBox = () => {
  return (
    <div className="whats-in-the-box">
      <h2>What's in the Box</h2>
      <div className="box-content">
        <div className="box-item">
          <div className="box-item-image macbook-image"></div>
          <p>13" MacBook Air with M3 chip</p>
        </div>
        <div className="box-item">
          <div className="box-item-image usb-c-cable-image"></div>
          <p>USB-C to MagSafe 3 Cable (2 m)</p>
        </div>
        <div className="box-item">
          <div className="box-item-image power-adapter-image"></div>
          <p>USB-C Power Adapter</p>
        </div>
      </div>
    </div>
  );
};

export default WhatsInBox;
