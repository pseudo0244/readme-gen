import React, { useState } from 'react';
import ReadmeForm from './components/ReadmeForm';
import ReadmePreview from './components/ReadmePreview';
import './App.css';

const App = () => {
  const [data, setData] = useState({
    title: "Hi 👋, I'm [Your Name]",
    subtitle: "A passionate frontend developer from India",
    work: [
      { label: "🔭 I’m currently working on", project: "Project Name", link: "https://example.com" },
      { label: "👯 I’m looking to collaborate on", project: "Project Name", link: "https://example.com" },
      { label: "🤝 I’m looking for help with", project: "Project Name", link: "https://example.com" },
      { label: "🌱 I’m currently learning", project: "Frameworks, courses etc." },
      { label: "💬 Ask me about", project: "React, Vue, GSAP" },
      { label: "📫 How to reach me", project: "example@gmail.com" },
      { label: "👨‍💻 All of my projects are available at", project: "Portfolio Link", link: "https://example.com" },
      { label: "📝 I regularly write articles on", project: "Blog Link", link: "https://example.com" },
      { label: "📄 Know about my experiences", project: "Resume Link", link: "https://example.com" },
      { label: "⚡ Fun fact", project: "I think I am funny." }
    ],
    skills: '', // Add skills field
  });

  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
  };

  return (
    <div className="app-container">
      <h1>README Generator</h1>
      <ReadmeForm data={data} setData={setData} onGenerate={handleGenerate} />
      {isGenerated && <ReadmePreview data={data} />}
    </div>
  );
};

export default App;
