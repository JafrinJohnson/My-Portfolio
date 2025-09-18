import React, { useState } from 'react';
import './skills.css';

function Skills() {
  const skills = [
    {
      name: "Python 🐍",
      detail: "Used for scripting, automation, and data science projects.",
      icon: "🐍"
    },
    {
      name: "C++ 💻",
      detail: "Strong foundation in OOP and systems programming.",
      icon: "💻"
    },
    {
      name: "Full-Stack Development 🌐",
      detail: "Experienced in MERN stack: MongoDB, Express, React, Node.js.",
      icon: "🌐"
    },
    {
      name: "Machine Learning 🤖",
      detail: "Built classification and prediction models using Python libraries.",
      icon: "🤖"
    },
    {
      name: "Web Development 🖥️",
      detail: "Created responsive websites using HTML, CSS, JS, and frameworks.",
      icon: "🖥️"
    },
    {
      name: "Debugging 🛠️",
      detail: "Skilled in fixing code issues using tools and logic.",
      icon: "🛠️"
    },
    {
      name: "Automation ⚡",
      detail: "Automated browser and data tasks using Python and Selenium.",
      icon: "⚡"
    }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closePopup = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="skills-section">
      <h2>💡 My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box"
            onClick={() => handleSkillClick(skill)}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box animated" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedSkill.icon} {selectedSkill.name}</h3>
            <p>{selectedSkill.detail}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
