// Step1.jsx
// @charset "UTF-8";
/* -------------------------- */

import React from 'react';
import { Button } from 'semantic-ui-react';
import options from '../assets/options.json';

const Step1 = ({ selectedStepOption, handleOptionClick, step }) => {
  const step1Options = options.step1.slice(1); // Exclude the first element which contains the title

  return (
    <>
      <h3>{options.step1[0].title}</h3>
      <div className='options'>
        {step1Options.map(option => (
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

export default Step1;
