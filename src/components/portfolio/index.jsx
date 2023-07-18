import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";


const projectsData = [
  {
      id: 1,
      name: "Healthy Food Restraunt (Currently Working)",
      tags: ["web-app", "mobile-app"],
      media: {
          thumbnail: require("../../images/portfolio/thumb-7.jpg"),
          
          
      },
  },
  {
      id: 2,
      name: "Weather App (HTML, CSS, Javascript, Open Weather API)  ",
      tags: ["web-page"],
      media: {
          thumbnail: require("../../images/portfolio/thumb-2.png"),
      },
  },
  {
      id: 3,
      name: "Stream-verse",
      tags: ["web-page"],
      media: {
          thumbnail: require("../../images/portfolio/thumb-5.png"),
      },
  },
  
  {
      id: 4,
      name: " Music Player",
      tags: ["web-app", "web-page"],
      media: {
          thumbnail: require("../../images/portfolio/thumb-6.png"),
      },
  },
  
]

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");


    setTimeout(() => {
      if (tag !== "all") {
        const filteredPorjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredPorjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin")
    }, 200);
    setTimeout(() => {
      setTransition(false);
    }, 600);
  };
  return (
    <Section id="portfolio" title="Check my portfolio" background="light" className="portfolio">
      <div className="portfolio-content-wrapper">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
      
    </Section>
  );
};

export default Portfolio;
