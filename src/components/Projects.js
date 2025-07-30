import React from 'react';

const projects = [
  {
    title: 'Online Course Portal',
    description: 'A full-stack platform for students to enroll and access courses with authentication and course management.',
    tech: 'Django, HTML, CSS, SQLite'
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Tracks daily income and expenses, includes dynamic Chart.js visualizations.',
    tech: 'Flask, JavaScript, Bootstrap, SQLite'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Real-time group chat interface with WebSocket functionality and typing indicators.',
    tech: 'React.js, HTML, CSS, JavaScript'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Used:</strong> {project.tech}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
