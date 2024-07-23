// Step5.jsx
import React from 'react';
import options from '../assets/options.json';
import { Dropdown } from 'semantic-ui-react';


const Step5 = () => {
  const stepContent = options.step5;

  const optionss = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    
  ]

  return (
    <>
      <h3>{stepContent[0].title}</h3>
      <Dropdown placeholder='Skills' fluid multiple selection options={optionss} />
      
    </>
  );
};

export default Step5;
