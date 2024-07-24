/* Step9.jsx */
/* ----------------- */

import React, { useState, useEffect } from 'react';
import options from '../assets/options.json';

const Step9 = ({ }) => {

  const stepContent = {
    title: options.step9[0].title,
    
  };

  return (
    <>
      <h3>{stepContent.title}</h3>
      
    </>
  );
};

export default Step9;
