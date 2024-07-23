// Step4.jsx
import React, { useState } from 'react';
import { Message, Form } from 'semantic-ui-react';
import options from '../assets/options.json';
import "./Step4.css";

const Step4 = ({ setStep4Input, setIsStep4InputValid }) => {
  const [input, setInput] = useState(""); // Local state for Step4 input
  const [isValid, setIsValid] = useState(true); // Local state for input validation

  const stepContent = {
    title: options.step4[0].title,
    options: []
  };

  const list = [
    options.step4[1].örnek1,
    options.step4[2].örnek2,
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setStep4Input(value); // Update parent component's state

    // Add validation logic
    const isInputValid = validateInput(value);
    setIsValid(isInputValid);
    setIsStep4InputValid(isInputValid); // Update parent component's validation state
  };

  const validateInput = (input) => {
    // Example validation logic
    // 1. Check if input is not empty
    // 2. Check if input length is within a reasonable range (e.g., 10 to 500 characters)
    // 3. Check if input contains at least one numeric value (assuming logical messages might include numbers like carpet dimensions)
    // 4. Add any other specific criteria you need

    if (input.length < 10 || input.length > 500) {
      return false;
    }

    const containsNumber = /\d/.test(input);
    if (!containsNumber) {
      return false;
    }

    // Add more specific checks as needed
    // Example: Ensure certain keywords are not present (this is just an example)
    const forbiddenKeywords = ["unlogical", "nonsense", "invalid"];
    for (let keyword of forbiddenKeywords) {
      if (input.toLowerCase().includes(keyword)) {
        return false;
      }
    }

    // If all checks pass, the input is considered logical
    return true;
  };

  const renderExamples = () => (
    <>
      <Form>
        <Form.TextArea 
          label='' 
          placeholder='Kaç adet halı? Biliyorsan, tam boyutları nelerdir? Çeşitleri nelerdir? (Makine, shaggy, yün, el dokuma vs.)' 
          style={{ resize: "none", height: "150px", borderColor: isValid ? undefined : 'red' }} 
          value={input}
          onChange={handleInputChange}
        />
        {!isValid && <p style={{ color: 'red' }}>Mantıksız mesaj kabul edilemez.</p>}
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
