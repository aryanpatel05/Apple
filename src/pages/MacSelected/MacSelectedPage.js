import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/MacSelectedPage.css";
import MainContainer from "../../components/MainContainer";

const basePrice = 99900; // Base price in INR
const emiMonths = 12; // Number of months for EMI calculation

const prices = {
  m2_10core: 10000,
  memory_16GB: 20000,
  memory_24GB: 40000,
  storage_512GB: 20000,
  storage_1TB: 40000,
  storage_2TB: 80000,
  powerAdapter_35W: 2000,
  powerAdapter_67W: 2000,
  finalCutPro: 29900,
  logicPro: 19900,
};

const MacSelectedPage = () => {
  const [selectedOption, setSelectedOption] = useState("m2-8core");
  const [selectedMemory, setSelectedMemory] = useState("8GB");
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [selectedPowerAdapter, setSelectedPowerAdapter] = useState("30W");
  const [selectedFinalCutPro, setSelectedFinalCutPro] = useState("no-thanks");
  const [selectedLogicPro, setSelectedLogicPro] = useState("no-thanks");

  const navigate = useNavigate();
  const location = useLocation();
  const { selectedColorLeft, selectedColorRight } = location.state || {};

  const colorToImageMap = {
    blue: {
      name: "Midnight",
      image: require("../../images/mba13-midnight-config-202402.jpeg"),
    },
    gold: {
      name: "Starlight",
      image: require("../../images/mba13-starlight-config-202402.jpeg"),
    },
    silver: {
      name: "Silver",
      image: require("../../images/mba13-spacegray-config-202402.jpeg"),
    },
    spaceGray: {
      name: "Space Gray",
      image: require("../../images/mba13-silver-config-202402.jpeg"),
    },
  };

  const selectedColorKey = selectedColorLeft || selectedColorRight;
  const selectedColor = colorToImageMap[selectedColorKey];
  const selectedImage = selectedColor?.image;
  const selectedColorName = selectedColor?.name;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToBag = () => {
    const totalPrice = calculateTotalPrice();
    const monthlyPrice = calculateMonthlyPrice(totalPrice);
    navigate("/billing", {
      state: {
        totalPrice,
        monthlyPrice,
        imagePath: selectedImage,
        colorName: selectedColorName,
      },
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = basePrice;

    if (selectedOption === "m2-10core") totalPrice += prices.m2_10core;
    if (selectedMemory === "16GB") totalPrice += prices.memory_16GB;
    if (selectedMemory === "24GB") totalPrice += prices.memory_24GB;
    if (selectedStorage === "512GB") totalPrice += prices.storage_512GB;
    if (selectedStorage === "1TB") totalPrice += prices.storage_1TB;
    if (selectedStorage === "2TB") totalPrice += prices.storage_2TB;
    if (selectedPowerAdapter === "35W") totalPrice += prices.powerAdapter_35W;
    if (selectedPowerAdapter === "67W") totalPrice += prices.powerAdapter_67W;
    if (selectedFinalCutPro === "final-cut-pro")
      totalPrice += prices.finalCutPro;
    if (selectedLogicPro === "logic-pro") totalPrice += prices.logicPro;

    return totalPrice;
  };

  const calculateMonthlyPrice = (totalPrice) => {
    return Math.floor(totalPrice / emiMonths);
  };

  const totalPrice = calculateTotalPrice();
  const monthlyPrice = calculateMonthlyPrice(totalPrice);

  return (
    <MainContainer>
      <div className="mac-selected-page">
        <div className="mac-info-container">
          <img
            src={selectedImage}
            alt={`MacBook Air - ${selectedColorName}`}
            className="mac-image"
          />
          <div className="mac-info">
            <h1 className="mac-select-h1">Customise your 13"</h1>
            <h1 className="mac-select-h1">MacBook Air - {selectedColorName}</h1>
            <p>
              Apple M2 chip with 8-core CPU, 8-core GPU, 16-core Neural Engine
            </p>
            <p>8GB unified memory</p>
            <p>256GB SSD storage</p>
            <p>34.46 cm (13.6″) Liquid Retina display with True Tone²</p>
            <p>1080p FaceTime HD camera</p>
            <p>MagSafe 3 charging port</p>
            <p>Two Thunderbolt / USB 4 ports</p>
            <p>30W USB-C Power Adapter</p>
            <p>Backlit Magic Keyboard with Touch ID - US English</p>

            <h2>Chip (Processor)</h2>
            <div className="mac-config-options">
              <div
                className={`mac-config-option ${
                  selectedOption === "m2-8core" ? "selected" : ""
                }`}
                onClick={() => setSelectedOption("m2-8core")}
              >
                <p>
                  Apple M2 chip with 8-core CPU
                  <br /> 8-core GPU
                  <br /> 16-core Neural Engine
                </p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedOption === "m2-10core" ? "selected" : ""
                }`}
                onClick={() => setSelectedOption("m2-10core")}
              >
                <p>
                  Apple M2 chip with 8-core CPU
                  <br /> 10-core GPU
                  <br /> 16-core Neural Engine
                  <span className="extra-cost">+ ₹10,000</span>
                </p>
              </div>
            </div>

            <h2>Memory</h2>
            <div className="mac-config-options memory-options">
              <div
                className={`mac-config-option ${
                  selectedMemory === "8GB" ? "selected" : ""
                }`}
                onClick={() => setSelectedMemory("8GB")}
              >
                <p>8GB unified memory</p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedMemory === "16GB" ? "selected" : ""
                }`}
                onClick={() => setSelectedMemory("16GB")}
              >
                <p>
                  16GB unified memory
                  <span className="extra-cost">+ ₹20,000</span>
                </p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedMemory === "24GB" ? "selected" : ""
                }`}
                onClick={() => setSelectedMemory("24GB")}
              >
                <p>
                  24GB unified memory
                  <span className="extra-cost">+ ₹40,000</span>
                </p>
              </div>
            </div>

            <h2>Storage</h2>
            <div className="mac-config-options storage-options">
              <div
                className={`mac-config-option ${
                  selectedStorage === "256GB" ? "selected" : ""
                }`}
                onClick={() => setSelectedStorage("256GB")}
              >
                <p>256GB SSD storage</p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedStorage === "512GB" ? "selected" : ""
                }`}
                onClick={() => setSelectedStorage("512GB")}
              >
                <p>
                  512GB SSD storage
                  <span className="extra-cost">+ ₹20,000</span>
                </p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedStorage === "1TB" ? "selected" : ""
                }`}
                onClick={() => setSelectedStorage("1TB")}
              >
                <p>
                  1TB SSD storage
                  <span className="extra-cost">+ ₹40,000</span>
                </p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedStorage === "2TB" ? "selected" : ""
                }`}
                onClick={() => setSelectedStorage("2TB")}
              >
                <p>
                  2TB SSD storage
                  <span className="extra-cost">+ ₹80,000</span>
                </p>
              </div>
            </div>

            <h2>Power Adapter</h2>
            <div className="mac-config-options power-adapter-options">
              <div
                className={`mac-config-option ${
                  selectedPowerAdapter === "30W" ? "selected" : ""
                }`}
                onClick={() => setSelectedPowerAdapter("30W")}
              >
                <p>30W USB-C Power Adapter</p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedPowerAdapter === "35W" ? "selected" : ""
                }`}
                onClick={() => setSelectedPowerAdapter("35W")}
              >
                <p>
                  35W Dual USB-C Port Power Adapter
                  <span className="extra-cost">+ ₹2,000</span>
                </p>
              </div>
              <div
                className={`mac-config-option ${
                  selectedPowerAdapter === "67W" ? "selected" : ""
                }`}
                onClick={() => setSelectedPowerAdapter("67W")}
              >
                <p>
                  67W USB-C Power Adapter
                  <span className="extra-cost">+ ₹2,000</span>
                </p>
              </div>
            </div>

            <h2>Pre-installed Software</h2>
            <div className="pre-installed-software">
              <h3>Final Cut Pro</h3>
              <div className="software-options">
                <div
                  className={`software-option ${
                    selectedFinalCutPro === "no-thanks" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedFinalCutPro("no-thanks")}
                >
                  <p>No, thanks</p>
                </div>
                <div
                  className={`software-option ${
                    selectedFinalCutPro === "final-cut-pro" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedFinalCutPro("final-cut-pro")}
                >
                  <p>
                    Final Cut Pro
                    <span className="extra-cost">+ ₹29,900</span>
                  </p>
                </div>
              </div>

              <h3>Logic Pro</h3>
              <div className="software-options">
                <div
                  className={`software-option ${
                    selectedLogicPro === "no-thanks" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedLogicPro("no-thanks")}
                >
                  <p>No, thanks</p>
                </div>
                <div
                  className={`software-option ${
                    selectedLogicPro === "logic-pro" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedLogicPro("logic-pro")}
                >
                  <p>
                    Logic Pro
                    <span className="extra-cost">+ ₹19,900</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="selected-mac-container">
          <div className="delivery-info">
            <div className="icon">
              <span role="img" aria-label="delivery">
                🚚
              </span>
            </div>
            <div>
              <span>Order by 3:00 p.m.</span>
              <br />
              <span>
                Delivers to <a href="#location">380024</a>
              </span>
              <br />
              <span>Fri 16 Aug — Free</span>
            </div>
            <div className="icon">
              <span role="img" aria-label="store">
                🛍️
              </span>
            </div>
            <div>
              <span>
                Order now. Pick up, in<br></br> store:
              </span>
              <br />
              <span>
                <a href="#store">Today at Apple BKC</a>
              </span>
            </div>
          </div>

          <div className="price-info">
            <div className="price">
              From ₹{monthlyPrice.toLocaleString("en-IN")}.00/mo. with <br></br>
              instant cashback§§ and <br></br>
              No Cost EMI§ or MRP<br></br> ₹{totalPrice.toLocaleString("en-IN")}
            </div>
            <div className="price-details">(Incl. of all taxes)</div>
          </div>

          <div className="add-to-bag-btn" onClick={handleAddToBag}>
            Add to Bag
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default MacSelectedPage;
