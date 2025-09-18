import React from 'react';
import './achievements.css';

function Achievements() {
  const achievements = [
    { title: "🏆 Hackathon Winner", description: "Won first place in XYZ College Hackathon for innovative software solution." },
    { title: "🎖️ Certified Developer", description: "Certified in Python for Data Science, Full Stack Development, and Software Testing." },
    { title: "🌟 Team Leader", description: "Led a team in technical competitions showcasing leadership and collaboration skills." },
    { title: "💡 Innovative Project", description: "Developed AI-based Fake News Detector with high accuracy using NLP." }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements 🥇</h2>
      <div className="achievements-container">
        {achievements.map((achieve, index) => (
          <div key={index} className="achievement-card">
            <h3>{achieve.title}</h3>
            <p>{achieve.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
