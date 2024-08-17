import React from "react";
import "../styles/MainContainer.css"; // Import the CSS file for styling

const MainContainer = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default MainContainer;
