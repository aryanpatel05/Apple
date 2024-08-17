import React, { useEffect } from "react";
import "../styles/Mchip.css";

const Mchip = ({ selectedChip, setSelectedChip }) => {
  const chips = ["13” (M2 chip)", "13” (M3 chip)", "15” (M3 chip)"];

  useEffect(() => {
    const savedChip = localStorage.getItem("selectedChip");
    if (savedChip) {
      setSelectedChip(savedChip);
    }
  }, [setSelectedChip]);

  useEffect(() => {
    localStorage.setItem("selectedChip", selectedChip);
  }, [selectedChip]);

  return (
    <div className="mchip-container">
      <h1>Choose your new MacBook Air.</h1>
      <div className="mchip-selector">
        {chips.map((chip) => (
          <div
            key={chip}
            className={`chip ${selectedChip === chip ? "selected" : ""}`}
            onClick={() => setSelectedChip(chip)}
          >
            {chip}
          </div>
        ))}
      </div>
      <div className="chat-specialist">
        <p>Have questions about buying a Mac?</p>
        <a href="https://www.apple.com/shop/chat">Chat with a Mac Specialist</a>
      </div>
    </div>
  );
};

export default Mchip;
