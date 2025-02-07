import React from "react";
import "@/app/style/skills.css";


const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        {/* First Column: Heading and Paragraph */}
        <div data-aos="zoom-in-up" className="skills-left">
          <p className="skills-text">
          I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.
          My experience extends to using frameworks like React and Next.js to create dynamic and
          user-friendly applications.
          </p>
        </div>

        {/* Second Column: Skills */}
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Typescript</h2>
            </div>
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Tailwind Css</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

