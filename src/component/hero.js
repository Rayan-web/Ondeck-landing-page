import React from "react";
import HeroImage from "../Assets/HeroImage.png";
import Alt from "../Assets/Alternative.svg";
import Capterra from "../Assets/Capterra.svg";
import Shopify from "../Assets/shopify.png";
import Netflix from "../Assets/icons/Netflix Logo.svg";
import ShopifyIcon from "../Assets/icons/Shopify Logo.svg";
import Spotify from "../Assets/icons/Spotify Logo.svg";
import Wallmart from "../Assets/icons/Walmart Logo.svg";
function Hero() {
  return (
    <>
      <article className="section">
        <div className="heading">
          <div className="justfy">
            <h1 className="title">
              Ondeck is your remote <br />
              <span className="span-text">conference calling tool </span>
            </h1>
            <p className="para-hero">
              Ondeck is a service that allows you to create beautiful,online,
              and encrypted video call for <br />
              you and your remote team
            </p>
          </div>
          <div className="btn">
            <a href="#" className="button-hero">
              Try for free
            </a>
            <div className="reating">
              <p>5.0 Rating based on reviws from :</p>
              <div className="icons">
                <img src={Capterra} alt="" />
                <img src={Alt} alt="" />
                <img className="shopify" src={Shopify} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img className="hero-image" src={HeroImage} alt="" />
        </div>
      </article>
      <div className="footer">
        <p className="footer-text">
          Trusted by 3+ million people at companies like
        </p>
        <div className="footer-icons">
          <img src={Netflix} alt="" />
          <img src={ShopifyIcon} alt="" />
          <img src={Spotify} alt="" />
          <img src={Wallmart} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
