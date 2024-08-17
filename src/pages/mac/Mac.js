import React, { useEffect, useRef, useState } from "react";
import "../../styles/Mac.css";
import MainContainer from "../../components/MainContainer"; // Ensure this import is correct

const Mac = () => {
  const sliderContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = sliderContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    const handleScroll = () => {
      checkScrollButtons();
    };

    sliderContainer.addEventListener("scroll", handleScroll);
    checkScrollButtons(); // Initial check

    return () => {
      sliderContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrevClick = () => {
    sliderContainerRef.current.scrollBy({
      left: -360, // Adjust this value based on the width of your cards
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    sliderContainerRef.current.scrollBy({
      left: 360, // Adjust this value based on the width of your cards
      behavior: "smooth",
    });
  };

  return (
    <div>
      <MainContainer>
        <section className="mac-section">
          <div className="text-container">
            <h1>Go further with Mac</h1>
          </div>
          <div className="image-container">
            <div className="overlay">
              <h2>Supercharge your studies.</h2>
              <div className="buttons">
                <a
                  href="https://www.apple.com/mac/watch-the-film"
                  className="watch-film-btn"
                >
                  Watch the film
                </a>
                <a
                  href="https://www.apple.com/mac/learn-more"
                  className="learn-more-btn"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </MainContainer>

      <MainContainer>
        <section className="know-mac-section">
          <h2 className="section-title">Get to know Mac.</h2>
          <div className="slider-container" ref={sliderContainerRef}>
            <div className="slide">
              <div className="card">
                <div className="card-overlay">
                  <h3>Getting Started</h3>
                  <p>Easy to use. Easy to love.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-overlay">
                  <h3>Performance and Battery Life</h3>
                  <p>Go fast. Go far.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-overlay">
                  <h3>Mac and iPhone</h3>
                  <p>Dream team.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-overlay">
                  <h3>Compatibility</h3>
                  <p>Mac runs your favorite apps.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-overlay">
                  <h3>Design</h3>
                  <p>Beautifully crafted.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-overlay">
                  <h3>Privacy and Security</h3>
                  <p>Your data, your rules.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-overlay">
                  <h3>Support</h3>
                  <p>Help at your fingertips.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-nav">
            <button
              className="prev"
              onClick={handlePrevClick}
              disabled={!canScrollLeft}
              style={{ display: canScrollLeft ? "block" : "none" }}
            >
              &#10094;
            </button>
            <button
              className="next"
              onClick={handleNextClick}
              disabled={!canScrollRight}
              style={{ display: canScrollRight ? "block" : "none" }}
            >
              &#10095;
            </button>
          </div>
        </section>
      </MainContainer>

      {/* New Section */}
      <MainContainer>
        <section className="grey">
          <section className="explore-lineup-section">
            <h2>Explore the line-up.</h2>
            <div className="categories">
              <button className="category-btn active">Laptops</button>
              <button className="category-btn">Desktops</button>
              <button className="category-btn">Displays</button>
            </div>
            <div className="models">
              <div className="model macbook-air">
                <div className="model-info">
                  <h3>MacBook Air 13" and 15"</h3>
                  <p>M2 or M3 chip</p>
                  <p>
                    Strikingly thin and fast so you can work, play or create
                    anywhere.
                  </p>
                  <p>From ₹99900.00*</p>
                  <div className="model-buttons">
                    <a
                      href="https://www.apple.com/macbook-air"
                      className="model-learn-more-btn"
                    >
                      Learn more
                    </a>
                    <a href="/MacBuyPage" className="model-buy-btn">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div className="model macbook-pro">
                <div className="model-info">
                  <h3>MacBook Pro 14" and 16"</h3>
                  <p>M3, M3 Pro or M3 Max chip</p>
                  <p>The most advanced Mac laptops for demanding workflows.</p>
                  <p>From ₹169900.00*</p>
                  <div className="model-buttons">
                    <a
                      href="https://www.apple.com/macbook-pro"
                      className="model-learn-more-btn"
                    >
                      Learn more
                    </a>
                    <a href="/MacBuyPage" className="model-buy-btn">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </MainContainer>
    </div>
  );
};

export default Mac;
