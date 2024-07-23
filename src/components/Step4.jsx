// Step4.jsx
import React, { useState } from 'react';
import { Message, Form } from 'semantic-ui-react';
import options from '../assets/options.json';
import "./Step4.css";

const Step4 = ({ setStep4Input }) => {
  const [input, setInput] = useState(""); // Local state for Step4 input

  const stepContent = {
    title: options.step4[0].title,
    options: []
  };

  const list = [
    options.step4[1].örnek1,
    options.step4[2].örnek2,
  ];

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setStep4Input(e.target.value); // Update parent component's state
  };

  const renderExamples = () => (
    <>
      <Form>
        <Form.TextArea 
          label='' 
          placeholder='Kaç adet halı? Biliyorsan, tam boyutları nelerdir? Çeşitleri nelerdir? (Makine, shaggy, yün, el dokuma vs.)' 
          style={{ resize: "none", height: "150px" }} 
          value={input}
          onChange={handleInputChange}
        />
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
