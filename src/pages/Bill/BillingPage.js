import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/BillingPage.css";
import MainContainer from "../../components/MainContainer";

function BillingPage() {
  const location = useLocation();
  // const navigate = useNavigate();

  const initialState =
    location.state || JSON.parse(localStorage.getItem("productDetails")) || {};
  const { totalPrice, monthlyPrice, imagePath, colorName } = initialState;

  const [isProductRemoved, setIsProductRemoved] = useState(false);
  const [isAppleCareAdded, setIsAppleCareAdded] = useState(false);

  useEffect(() => {
    if (location.state) {
      localStorage.setItem("productDetails", JSON.stringify(location.state));
    }
  }, [location.state]);

  const handleRemoveProduct = () => {
    setIsProductRemoved(true);
    localStorage.removeItem("productDetails");
  };

  const handleToggleAppleCare = () => {
    setIsAppleCareAdded((prev) => !prev);
  };

  const appleCarePrice = 19900;
  const subtotal = isAppleCareAdded ? totalPrice + appleCarePrice : totalPrice;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <MainContainer>
      <div className="billing-container">
        {!totalPrice || isProductRemoved ? (
          <h2>Your bag is empty.</h2>
        ) : (
          <>
            <h2>
              Your bag total is ₹{totalPrice?.toLocaleString("en-IN")}.00 or ₹
              {monthlyPrice?.toLocaleString("en-IN")}/mo.
            </h2>
            <button className="checkout-button centered">Check Out</button>

            <div className="product-summary">
              <img
                src={imagePath}
                alt={`13” MacBook Air with M3 chip - ${colorName}`}
                className="product-image"
              />
              <div className="product-details">
                <h3>
                  13” MacBook Air with M3 chip -<br></br> {colorName}
                </h3>
                <p className="interest-rate">Pay 15.99% pa for 6 months: ^</p>
                <a href="#product-details" className="details-link">
                  Show product details
                </a>
              </div>
              <div className="product-pricing">
                <p className="price">
                  ₹{totalPrice?.toLocaleString("en-IN")}.00
                </p>
                <p className="installment">
                  ₹{monthlyPrice?.toLocaleString("en-IN")}/mo.
                </p>
                <p className="savings">
                  Get up to ₹12814.00 savings with eligible card(s)^
                </p>
                <button className="remove-button" onClick={handleRemoveProduct}>
                  Remove
                </button>
              </div>
            </div>

            <div className="applecare-section">
              <p>Add AppleCare+ for 13" MacBook Air (M3) for ₹19900.00</p>
              <button
                className="add-applecare-button"
                onClick={handleToggleAppleCare}
              >
                {isAppleCareAdded ? "Remove" : "Add"}
              </button>
            </div>

            <div className="billing-summary">
              <div className="summary-details">
                <p className="summary-label">Subtotal</p>
                <p className="summary-value">
                  ₹{subtotal.toLocaleString("en-IN")}.00
                </p>
              </div>
              <div className="summary-details">
                <p className="summary-label">Shipping</p>
                <p className="summary-value">FREE</p>
              </div>
              <div className="summary-total">
                <p className="total-label">Total</p>
                <p className="total-value">
                  ₹{total.toLocaleString("en-IN")}.00
                </p>
              </div>
              <p className="monthly-payment">
                ₹{monthlyPrice?.toLocaleString("en-IN")}/mo. with EMI
              </p>
              <p className="savings">
                Total savings of ₹12814.00 with eligible card(s)^
              </p>
              <button className="checkout-button right-aligned">
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </MainContainer>
  );
}

export default BillingPage;
