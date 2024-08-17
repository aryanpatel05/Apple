import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faStore } from "@fortawesome/free-solid-svg-icons";
import ColorImageSelect from "./ColorImageSelect";
import "../styles/M3chip.css";

const M3chip = () => {
  const [selectedColorLeft, setSelectedColorLeft] = useState("blue");
  const [selectedColorMiddle, setSelectedColorMiddle] = useState("blue");
  const [selectedColorRight, setSelectedColorRight] = useState("blue");

  const handleColorSelectLeft = (color) => {
    setSelectedColorLeft(color);
  };

  const handleColorSelectMiddle = (color) => {
    setSelectedColorMiddle(color);
  };

  const handleColorSelectRight = (color) => {
    setSelectedColorRight(color);
  };

  return (
    <div className="mac-buy-section">
      {/* Left Mac Option */}
      <div className={`mac-option ${selectedColorLeft}`}>
        <div className="mac-details">
          <ColorImageSelect
            selectedColor={selectedColorLeft}
            onColorSelect={handleColorSelectLeft}
          />
          <div className="mac-specs">
            <img
              src={require("../images/mba-m3-icon.png")}
              alt="M2 Chip"
              className="m2-chip"
            />
            <p>8-Core CPU</p>
            <p>8-Core GPU</p>
            <p>8GB Unified Memory</p>
            <p>
              256GB SSD Storage<span className="note">1</span>
            </p>
            <ul>
              <li>16-core Neural Engine</li>
              <li>
                34.46 cm (13.6") Liquid Retina display with True Tone
                <span className="note">2</span>
              </li>
              <li>1080p FaceTime HD camera</li>
              <li>MagSafe 3 charging port</li>
              <li>Two Thunderbolt / USB 4 ports</li>
              <li>Support for one external display</li>
              <li>Magic Keyboard with Touch ID</li>
              <li>Force Touch trackpad</li>
              <li>30W USB-C Power Adapter</li>
            </ul>
            <p>From ₹4844.00/mo. Per Monthfor 24 mo. with EMI</p>
            <p className="small">or</p>
            <p>₹99900.00 ‡</p>
            <button className="select-button">Select</button>
            <ul>
              <li>Need a moment?</li>
              <li>Keep all your selections by saving this</li>
              <li>device to Your Saves, then come back</li>
              <li>anytime and pick up right where you left</li>
              <li>off.</li>
            </ul>
            <div className="Deliver1">
              <div className="Deliver">
                <FontAwesomeIcon icon={faTruck} className="icon" />
                Order by 3:00 pm. Delivers to{" "}
                <a href="https://www.example.com/delivery-location">380024</a>
              </div>
              <p className="Deliver">Mon 5 Aug — Free</p>
              <div className="Deliver2">
                <div className="Deliver">
                  <FontAwesomeIcon icon={faStore} className="icon" />
                  Order now. Pick up, in store:{" "}
                  <a href="https://www.example.com/store-location">
                    Today at Apple BKC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Mac Option */}
      <div className={`mac-option ${selectedColorMiddle}`}>
        <div className="mac-details">
          <ColorImageSelect
            selectedColor={selectedColorMiddle}
            onColorSelect={handleColorSelectMiddle}
          />
          <div className="mac-specs">
            <img
              src={require("../images/mba-m3-icon.png")}
              alt="M2 Chip"
              className="m2-chip"
            />
            <p>8-Core CPU</p>
            <p>10-Core GPU</p>
            <p>16GB Unified Memory</p>
            <p>
              512GB SSD Storage<span className="note">1</span>
            </p>
            <ul>
              <li>16-core Neural Engine</li>
              <li>
                34.46 cm (13.6") Liquid Retina display with True Tone
                <span className="note">2</span>
              </li>
              <li>1080p FaceTime HD camera</li>
              <li>MagSafe 3 charging port</li>
              <li>Two Thunderbolt / USB 4 ports</li>
              <li>Support for one external display</li>
              <li>Magic Keyboard with Touch ID</li>
              <li>Force Touch trackpad</li>
              <li>35W Dual USB-C Port Power Adapter</li>
            </ul>
            <p>From ₹5816.00/mo. Per Monthfor 24 mo. with EMI</p>
            <p className="small">or</p>
            <p>₹119900.00 ‡</p>
            <button className="select-button">Select</button>
            <ul>
              <li>Need a moment?</li>
              <li>Keep all your selections by saving this</li>
              <li>device to Your Saves, then come back</li>
              <li>anytime and pick up right where you left</li>
              <li>off.</li>
            </ul>
            <div className="Deliver1">
              <div className="Deliver">
                <FontAwesomeIcon icon={faTruck} className="icon" />
                Order by 3:00 pm. Delivers to{" "}
                <a href="https://www.example.com/delivery-location">380024</a>
              </div>
              <p className="Deliver">Mon 5 Aug — Free</p>
              <div className="Deliver2">
                <div className="Deliver">
                  <FontAwesomeIcon icon={faStore} className="icon" />
                  Order now. Pick up, in store:{" "}
                  <a href="https://www.example.com/store-location">
                    Today at Apple BKC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Mac Option */}
      <div className={`mac-option ${selectedColorRight}`}>
        <div className="mac-details">
          <ColorImageSelect
            selectedColor={selectedColorRight}
            onColorSelect={handleColorSelectRight}
          />
          <div className="mac-specs">
            <img
              src={require("../images/mba-m3-icon.png")}
              alt="M2 Chip"
              className="m2-chip"
            />
            <p>8-Core CPU</p>
            <p>10-Core GPU</p>
            <p>8GB Unified Memory</p>
            <p>
              1TB SSD Storage<span className="note">1</span>
            </p>
            <ul>
              <li>16-core Neural Engine</li>
              <li>
                34.46 cm (13.6") Liquid Retina display with True Tone
                <span className="note">2</span>
              </li>
              <li>1080p FaceTime HD camera</li>
              <li>MagSafe 3 charging port</li>
              <li>Two Thunderbolt / USB 4 ports</li>
              <li>Support for one external display</li>
              <li>Magic Keyboard with Touch ID</li>
              <li>Force Touch trackpad</li>
              <li>67W USB-C Power Adapter</li>
            </ul>
            <p>From ₹7000.00/mo. Per Monthfor 24 mo. with EMI</p>
            <p className="small">or</p>
            <p>₹150000.00 ‡</p>
            <button className="select-button">Select</button>
            <ul>
              <li>Need a moment?</li>
              <li>Keep all your selections by saving this</li>
              <li>device to Your Saves, then come back</li>
              <li>anytime and pick up right where you left</li>
              <li>off.</li>
            </ul>
            <div className="Deliver1">
              <div className="Deliver">
                <FontAwesomeIcon icon={faTruck} className="icon" />
                Order by 3:00 pm. Delivers to{" "}
                <a href="https://www.example.com/delivery-location">380024</a>
              </div>
              <p className="Deliver">Mon 5 Aug — Free</p>
              <div className="Deliver2">
                <div className="Deliver">
                  <FontAwesomeIcon icon={faStore} className="icon" />
                  Order now. Pick up, in store:{" "}
                  <a href="https://www.example.com/store-location">
                    Today at Apple BKC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M3chip;
