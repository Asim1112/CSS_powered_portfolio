import React from 'react';
import './skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-grid">
        {/* Text Section */}
        <div>
          <h2 className="skills-title">Technologies I work with</h2>
          <p className="skills-description">
            I have a strong foundation in web development, with expertise in HTML, CSS, and TypeScript. My experience includes building dynamic, user-friendly applications using frameworks like React and Next.js. I am skilled in Tailwind CSS, allowing me to create responsive and visually appealing designs efficiently. Driven by a passion for learning, I stay updated on the latest technologies to continuously expand my skills and deliver high-quality contributions to projects.
          </p>
        </div>

        {/* Technologies Section */}
        <div>
          <div className="technologies-grid">
            <div className="technology-column">
              <h2 className="heading-skills">TypeScript</h2>
              <h2 className="heading-skills">React.js</h2>
              <h2 className="heading-skills">Next.js</h2>
            </div>
            <div className="technology-column">
              <h2 className="heading-skills">Tailwind CSS</h2>
              <h2 className="heading-skills">CSS</h2>
              <h2 className="heading-skills">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;