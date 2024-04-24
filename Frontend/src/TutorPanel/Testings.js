import React, { useState } from 'react';

function Testings() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [checked, setChecked] = useState([false, false, false, false]);

  const handleChange = (index, e) => {
    if (e.target.name === 'question') {
      setQuestion(e.target.value);
    } else if (e.target.name === 'option') {
      const newOptions = [...options];
      newOptions[index] = e.target.value;
      setOptions(newOptions);
    } else if (e.target.name === 'checkbox') {
      const newChecked = [...checked];
      newChecked[index] = e.target.checked;
      setChecked(newChecked);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Question:', question);
    console.log('Options:', options);
    console.log('Checked:', checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={(e) => handleChange(null, e)}
          required
        />
      </div>
      <div>
        {[0, 1, 2, 3].map((index) => (
          <div key={index}>
            <label htmlFor={`option${index}`}>Option {index + 1}:</label>
            <input
              type="text"
              id={`option${index}`}
              name="option"
              value={options[index]}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="checkbox"
              id={`checkbox${index}`}
              name="checkbox"
              checked={checked[index]}
              onChange={(e) => handleChange(index, e)}
            />
            <label htmlFor={`checkbox${index}`}>Correct</label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Testings;
