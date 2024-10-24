import React from 'react';

const ReadmeForm = ({ data, setData, onGenerate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Form</h2>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={data.title} onChange={handleChange} />
      </div>
      <div>
        <label>Subtitle:</label>
        <input type="text" name="subtitle" value={data.subtitle} onChange={handleChange} />
      </div>
      <h3>Work</h3>
      {data.work.map((item, index) => (
        <div key={index}>
          <label>{item.label}:</label>
          <input
            type="text"
            value={item.project}
            onChange={(e) => {
              const newWork = [...data.work];
              newWork[index].project = e.target.value;
              setData({ ...data, work: newWork });
            }}
          />
          {item.link && (
            <input
              type="text"
              placeholder="Link"
              value={item.link || ''}
              onChange={(e) => {
                const newWork = [...data.work];
                newWork[index].link = e.target.value;
                setData({ ...data, work: newWork });
              }}
            />
          )}
        </div>
      ))}
      <div>
        <label>Skills (comma separated):</label>
        <input
          type="text"
          name="skills"
          value={data.skills}
          onChange={handleChange}
          placeholder="e.g. JavaScript, React, CSS"
        />
      </div>
      <button onClick={onGenerate}>Generate</button>
    </div>
  );
};

export default ReadmeForm;
