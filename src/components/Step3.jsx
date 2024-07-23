// Step3.jsx
// @charset "UTF-8";
/* -------------------------- */

import React from 'react';
import { Button } from 'semantic-ui-react';
import options from '../assets/options.json';

const Step3 = ({ selectedStepOption, handleOptionClick, step }) => {
  const stepContent = {
    title: options.step3[0].title,
    description: "",
    options: options.step3.slice(1),
  };

  return (
    <>
      <h3>{stepContent.title}</h3>
      <div className='options'>
        {stepContent.options.map(option => (
          <Button
            key={option.value}
            className={`option-button ${selectedStepOption[step] === option.value ? 'on' : ''}`}
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

export default Step3;
