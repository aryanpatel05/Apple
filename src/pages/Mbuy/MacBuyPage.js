import React, { useState } from "react";
import Mchip from "../../components/Mchip";
import M3chip from "../../components/M3chip";
import M3chip15 from "../../components/M3chip15";
import "../../styles/MacBuyPage.css";
import MainContainer from "../../components/MainContainer";
import WhatsInBox from "../../components/WhatsInBox";
import MacBuySection from "../../components/MacBuySection";

const MacBuyPage = () => {
  const [selectedChip, setSelectedChip] = useState("13” (M2 chip)");

  return (
    <div className="mac-buy-page">
      <Mchip selectedChip={selectedChip} setSelectedChip={setSelectedChip} />
      <MainContainer>
        {selectedChip === "13” (M3 chip)" ? (
          <M3chip />
        ) : selectedChip === "15” (M3 chip)" ? (
          <M3chip15 />
        ) : (
          <MacBuySection />
        )}
        {/* Whats In the Box Component */}
        <WhatsInBox />
      </MainContainer>
    </div>
  );
};

export default MacBuyPage;
