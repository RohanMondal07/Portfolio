import React from "react";

import { AiOutlineCloudDownload } from "react-icons/ai";
import "./style.scss";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png"
import CallToAction from "../shared/CallToAction";
import Resume from "../../download/Rohan+resume.pdf";


const Skills = () => {
    return (
        <Section background="dark" id="skills">
            <div className="skills-content-wrapper">\
                <div className="left-col">
                  <img src={TechIcons} alt="Tech-Skills" />  
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p><ul>
                        <li>Frontend: Html, CSS, JavaScript and React .</li>
                        <li>Backend: FastApi , NodejS , Django.</li>
                        <li>Database: MySQL , MongoDB.</li>
                        <li>Programming Languages: C++ and Python.</li>
                        <li>Soft Skills: Leadership, Organization, Management, Coordination.</li>
                        </ul>
                    </p>
                    <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />}
                    action={() => window.open(Resume)}/> 
                </div>
            </div>
        </Section>
    );
};

export default Skills;
