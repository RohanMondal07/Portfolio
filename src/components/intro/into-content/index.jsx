import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import Boy from "../../../images/boy.png";
import { scrollToSection } from "../../utils/helper";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} />
              </span>
              <span className="text">, I am </span>
            </span>
            <span className="big-text">Rohan Mondal </span>
          </h1>
          <p>
          Self-motivated individual with strong leadership and communication skills. Experienced in coding with JavaScript, React, HTML, and CSS. Seeking an internship to leverage knowledge and experience to drive success in the assigned field.
          </p>
          <CallToAction
            text="Contact me"
            action={() => scrollToSection("contact")}
          />
        </div>
        <div className="right-col">
          <img src={Boy} alt="Rohan" />
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
