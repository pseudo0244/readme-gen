import React from 'react';
import './ReadmePreview.css'; 
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ReadmePreview = ({ data }) => {
  return (
    <div className="preview">
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <h3>Skills</h3>
      <div className="skills-container">
        {data.skills.split(',').map((skill, index) => (
          <div 
            key={index} 
            className="skill-block" 
            style={{ backgroundColor: getRandomColor() }}
          >
            {skill.trim()}
          </div>
        ))}
      </div>
      <h3>Work</h3>
      <ul>
        {data.work.map((item, index) => (
          <li key={index}>
            {item.label} <strong>{item.project}</strong>{item.link ? ` - [Link](${item.link})` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadmePreview;
