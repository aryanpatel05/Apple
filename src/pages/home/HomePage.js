import React from "react";
// import Navbar from "../../components/Navbar";
import MainContainer from "../../components/MainContainer";
// import Footer from "../../components/Footer";
import "../../styles/HomePage.css"; // Import CSS file for styling

const HomePage = () => {
  return (
    <div>
      <MainContainer>
        <section className="promo-section">
          <div className="text-content">
            <h1>MacBook Air</h1>
            <p>Supercharged by M3.</p>
            <div className="buttons">
              <a href="#learn-more" className="button learn-more">
                Learn more
              </a>
              <a href="#buy" className="button buy">
                Buy
              </a>
            </div>
          </div>
          <div className="image-content"></div>
        </section>
      </MainContainer>
      <MainContainer>
        <section className="iphone-section">
          <div className="text-content">
            <h1>iPhone 15 Pro</h1>
            <p>Titanium. So strong. So light. So Pro.</p>
            <div className="buttons">
              <a href="#learn-more-iphone" className="button learn-more">
                Learn more
              </a>
              <a href="#buy-iphone" className="button buy">
                Buy
              </a>
            </div>
          </div>
          <div className="image-content iphone"></div>
        </section>
      </MainContainer>
      <MainContainer>
        <section className="grid-section">
          <div className="grid-container">
            <div className="grid-item item1">
              <div className="grid-text-content">
                <h1>Out of Office</h1>
                <p>Apple at Work works from anywhere</p>
                <div className="buttons">
                  <a href="#learn-more" className="button learn-more">
                    Learn more
                  </a>
                  <a href="#watch-film" className="button watch-film">
                    Watch the film
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item item2">
              <div className="grid-text-content">
                <h1>The best AI PC is a Mac.</h1>

                <div className="buttons">
                  <a href="#Explore" className="button Explore">
                    Explore Mac for work
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item item3">
              <div className="grid-text-content">
                <h1>Apple Watch</h1>
                <span>Series 9</span>
                <p>Smarter. Brighter. Mightier.</p>
                <div className="buttons">
                  <a href="#learn-more" className="button learn-more">
                    Learn more
                  </a>
                  <a href="#buy" className="button buy">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item item4">
              <div className="grid-text-content">
                <h1>Apple Intelligence</h1>
                <span>AI for the rest of us.</span>
                <p>Coming in beta in US English later this year</p>
                <div className="buttons">
                  <a href="#learn-more" className="button learn-more">
                    Learn more
                  </a>
                  <a href="#buy" className="button buy">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item item5">
              <div className="grid-text-content">
                <div className="grid-text-pic"></div>

                <p>Two sizes. Faster chip. Does it all.</p>
                <div className="buttons">
                  <a href="#learn-more" className="button learn-more">
                    Learn more
                  </a>
                  <a href="#buy" className="button buy">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item item6">
              <div className="grid-text-content">
                <h1>Apple Trade In</h1>
                <p>Upgrade and save. It's that easy.</p>
                <div className="buttons">
                  <a href="#Explore" className="button Estimate">
                    Get your estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContainer>
    </div>
  );
};

export default HomePage;
