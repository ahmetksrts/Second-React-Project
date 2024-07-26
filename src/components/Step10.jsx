// Step10.jsx
// @charset "UTF-8";
/* -------------------------- */

import React from 'react';
import { Button } from 'semantic-ui-react';
import options from '../assets/options.json';


const Step10 = ({ selectedStepOption, handleOptionClick, step }) => {
  const stepContent = {
    title: options.final[0].title,
    p: options.final[1].p
  };

  return (
    <>
      <h3>{stepContent.title}</h3>
      <p className='option-p'>{stepContent.p}</p>
      {/* TODO: call back the first element of the "OPTIONS" array in the localsystem and print it. */}
      
    </>
  );
};

export default Step10;
