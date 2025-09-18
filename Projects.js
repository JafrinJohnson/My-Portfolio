import React from 'react';
import './projects.css';

function Projects() {
  const projects = [
    {
      title: " Fake News Detector",
      description: "Designed an AI-based tool using Natural Language Processing (NLP)  to identify fake news . Utilized machine learning models to classify articles based on authenticity with high accuracy."
    },
    {
      title: " Travel Destination Finder",
      description: "Interactive travel site with animated destinations and a booking page . Designed and developed a vibrant, animated travel website  using HTML, CSS, and JavaScript. Users can explore 9+ destinations with images , quotes , and interactive popups ."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
