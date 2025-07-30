import React from 'react';

const skills = [
  'Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL',
  'Django', 'React.js', 'Bootstrap',
  'PostgreSQL', 'MySQL', 'SQLite',
  'Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools'
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(skill => <span key={skill} className="skill">{skill}</span>)}
      </div>
    </section>
  );
}

export default Skills;
