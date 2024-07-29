import React from 'react';
import { Button } from 'semantic-ui-react';
import options from '../assets/options.json';
import './Step2.css'; // Ensure this file is imported

const Step2 = ({ selectedStepOption, handleOptionClick, step, selectedOption, baslık }) => {
  const stepContent = {
    title: options.step2[selectedOption][0].title,
    description: options.step2[selectedOption][1].description,
    options: options.step2[selectedOption].slice(2).map(option => ({
      ...option,
      value: `${option.value}`

    
    }))
    
    
  };

  baslık = stepContent.title;
  return (
    <>
      <h3>{stepContent.title}</h3>
      <p className='option-p'>{stepContent.description}</p>
      <div className='step2-options'>
        {stepContent.options.map(option => (
          <Button
            key={option.value}
            className={`step2-option-button ${selectedStepOption[step] === option.value ? 'on' : ''}`}
            onClick={() => handleOptionClick(step, option)}
          >
            {option.label}
            {selectedStepOption[step] === option.value && <i className="check icon"></i>}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Step2;
