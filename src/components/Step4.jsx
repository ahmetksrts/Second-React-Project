// Step4.jsx
// @charset "UTF-8";
/* -------------------------- */

import React from 'react';
import { Button } from 'semantic-ui-react';
import options from '../assets/options.json';
import { Message } from 'semantic-ui-react';
import "./Step4.css";
import { FormTextArea, Form} from 'semantic-ui-react';


const Step4 = ({ selectedStepOption, handleOptionClick, step }) => {
  const stepContent = {
    title: options.step4[0].title,
    options: []
  };

  const list = [
    'You can now have cover images on blog pages',
    'Drafts will now auto-save while writing',
  ]



  const renderExamples = () => (
    <>
    <Form>
      <FormTextArea label='About' placeholder='Tell us more about you...' />
    </Form>


    <div className='step4-content'>
      <Message header='Örnekler' list={list} />
    </div>

    </>
  );

  return (
    <>
      <h3>{stepContent.title}</h3>
      
      {renderExamples()}
    </>
  );
};

export default Step4;
