import React from "react";

const Skills = () => {
  return (
    <div className="page">
      <section className="skills-page">
        <div className="skills-header">
          <h1>Keahlian Frontend</h1>
          <p>Teknologi yang saya kuasai dalam pengembangan web</p>
        </div>
        <div className="skills-container">
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-name">HTML & CSS</div>
              <div className="skill-bar">
                <div className="skill-progress"></div>
              </div>
              <p className="skill-level">50% - Intermediate Level</p>
            </div>
            <div className="skill-item">
              <div className="skill-name">JavaScript</div>
              <div className="skill-bar">
                <div className="skill-progress"></div>
              </div>
              <p className="skill-level">15% - Super Beginner Level</p>
            </div>
            <div className="skill-item">
              <div className="skill-name">React.js</div>
              <div className="skill-bar">
                <div className="skill-progress"></div>
              </div>
              <p className="skill-level">25% - Beginner Level</p>
            </div>
            <div className="skill-item">
              <div className="skill-name">Responsive Design</div>
              <div className="skill-bar">
                <div className="skill-progress"></div>
              </div>
              <p className="skill-level">20% - Beginner Level</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
