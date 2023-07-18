import React from "react";
import "./style.scss";
import Section from "../shared/section";
import Logo from "../../images/logo.png";
import {
  
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FcGoogle, } from "react-icons/fc";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";

const Footer = () => {
  return (
    <Section className="footer" background="black">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="Rohan" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#ffffff"
            icon={<FcGoogle />}
            link="mailto:rohanmondalk@gmail.com"
          />
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/RohanMondal07"
          />
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/rohan-mondal-62202b254"
          />
          <SocialIcon
            color="#ff1a8c"
            icon={<FaInstagram />}
            link="https://instagram.com/rohan_mverse?igshid=MzNlNGNkZWQ4Mg=="
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2023 Rohan Mondal |All Rights Reseverd
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
