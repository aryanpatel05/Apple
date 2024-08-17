import React, { useState } from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    store: false,
    mac: false,
    ipad: false,
  });

  const navigate = useNavigate();

  const handleMouseEnter = (menu) => {
    setDropdownVisible((prevState) => ({ ...prevState, [menu]: true }));
    document.body.classList.add("no-scroll");
  };

  const handleMouseLeave = (menu) => {
    setDropdownVisible((prevState) => ({ ...prevState, [menu]: false }));
    document.body.classList.remove("no-scroll");
  };

  const handleCartClick = () => {
    navigate("/billing");
  };

  return (
    <nav className="navbar">
      {(dropdownVisible.store ||
        dropdownVisible.mac ||
        dropdownVisible.ipad) && (
        <div
          className="overlay"
          onClick={() =>
            setDropdownVisible({ store: false, mac: false, ipad: false })
          }
        />
      )}
      <div className="navbar-logo">
        <a href="#home" className="navbar-icon">
          <FontAwesomeIcon icon={faApple} />
        </a>
      </div>
      <ul className="navbar-links">
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("store")}
          onMouseLeave={() => handleMouseLeave("store")}
        >
          <a href="/">Store</a>
          <div
            className={`dropdown-content ${
              dropdownVisible.store ? "visible" : ""
            }`}
          >
            <div className="dropdown-column">
              <h4>Shop</h4>
              <ul>
                <li>
                  <a href="#shop-latest">Shop the Latest</a>
                </li>
                <li>
                  <a href="#mac">Mac</a>
                </li>
                <li>
                  <a href="#ipad">iPad</a>
                </li>
                <li>
                  <a href="#iphone">iPhone</a>
                </li>
                <li>
                  <a href="#watch">Apple Watch</a>
                </li>
                <li>
                  <a href="#accessories">Accessories</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#find-store">Find a Store</a>
                </li>
                <li>
                  <a href="#order-status">Order Status</a>
                </li>
                <li>
                  <a href="#ways-buy">Ways to Buy</a>
                </li>
                <li>
                  <a href="#student-offer">University Student Offer</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-column">
              <h4>Shop Special Stores</h4>
              <ul>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#business">Business</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("mac")}
          onMouseLeave={() => handleMouseLeave("mac")}
        >
          <a href="/mac">Mac</a>
          <div
            className={`dropdown-content ${
              dropdownVisible.mac ? "visible" : ""
            }`}
          >
            <div className="dropdown-column">
              <h4>Explore Mac</h4>
              <ul>
                <li>
                  <a href="#explore-mac">Explore All Mac</a>
                </li>
                <li>
                  <a href="#macbook-air">MacBook Air</a>
                </li>
                <li>
                  <a href="#macbook-pro">MacBook Pro</a>
                </li>
                <li>
                  <a href="#imac">iMac</a>
                </li>
                <li>
                  <a href="#mac-mini">Mac mini</a>
                </li>
                <li>
                  <a href="#mac-studio">Mac Studio</a>
                </li>
                <li>
                  <a href="#mac-pro">Mac Pro</a>
                </li>
                <li>
                  <a href="#displays">Displays</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-column">
              <h4>Shop Mac</h4>
              <ul>
                <li>
                  <a href="#shop-mac">Shop Mac</a>
                </li>
                <li>
                  <a href="#mac-accessories">Mac Accessories</a>
                </li>
                <li>
                  <a href="#ways-buy">Ways to Buy</a>
                </li>
                <li>
                  <a href="#student-offer">University Student Offer</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-column">
              <h4>More from Mac</h4>
              <ul>
                <li>
                  <a href="#mac-support">Mac Support</a>
                </li>
                <li>
                  <a href="#applecare-mac">AppleCare+ for Mac</a>
                </li>
                <li>
                  <a href="#macos-sequoia">macOS Sequoia Preview</a>
                </li>
                <li>
                  <a href="#apple-intelligence">Apple Intelligence</a>
                </li>
                <li>
                  <a href="#apps-by-apple">Apps by Apple</a>
                </li>
                <li>
                  <a href="#continuity">Continuity</a>
                </li>
                <li>
                  <a href="#icloud">iCloud+</a>
                </li>
                <li>
                  <a href="#mac-business">Mac for Business</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("ipad")}
          onMouseLeave={() => handleMouseLeave("ipad")}
        >
          <a href="#ipad">iPad</a>
          <div
            className={`dropdown-content ${
              dropdownVisible.ipad ? "visible" : ""
            }`}
          >
            <div className="dropdown-column">
              <h4>Explore iPad</h4>
              <ul>
                <li>
                  <a href="#explore-ipad">Explore All iPad</a>
                </li>
                <li>
                  <a href="#ipad-pro">iPad Pro</a>
                </li>
                <li>
                  <a href="#ipad-air">iPad Air</a>
                </li>
                <li>
                  <a href="#ipad">iPad</a>
                </li>
                <li>
                  <a href="#ipad-mini">iPad mini</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-column">
              <h4>Shop iPad</h4>
              <ul>
                <li>
                  <a href="#shop-ipad">Shop iPad</a>
                </li>
                <li>
                  <a href="#ipad-accessories">iPad Accessories</a>
                </li>
                <li>
                  <a href="#ways-buy">Ways to Buy</a>
                </li>
                <li>
                  <a href="#student-offer">University Student Offer</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-column">
              <h4>More from iPad</h4>
              <ul>
                <li>
                  <a href="#ipad-support">iPad Support</a>
                </li>
                <li>
                  <a href="#applecare-ipad">AppleCare+ for iPad</a>
                </li>
                <li>
                  <a href="#ipados-preview">iPadOS Preview</a>
                </li>
                <li>
                  <a href="#apps-by-apple">Apps by Apple</a>
                </li>
                <li>
                  <a href="#continuity">Continuity</a>
                </li>
                <li>
                  <a href="#icloud">iCloud+</a>
                </li>
                <li>
                  <a href="#ipad-business">iPad for Business</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#iphone">iPhone</a>
        </li>
        <li>
          <a href="#watch">Watch</a>
        </li>
        <li>
          <a href="#airpods">AirPods</a>
        </li>
        <li>
          <a href="#tv-home">TV & Home</a>
        </li>
        <li>
          <a href="#entertainment">Entertainment</a>
        </li>
        <li>
          <a href="#accessories">Accessories</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <a href="#search" className="navbar-icon">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <button onClick={handleCartClick} className="navbar-icon-button">
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
