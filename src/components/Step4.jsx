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
    'You can now have cover images on blog pages', // use options.step4[1]
    'Drafts will now auto-save while writing', // use options.step4[2]
  ]



  const renderExamples = () => (
    <>
    <Form>
      <FormTextArea label='About' placeholder='Kaç adet halı? Biliyorsan, tam boyutları' style={{resize:"none"}} />
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
