/* Step7.jsx */
/* ----------------- */

import React, { useState, useEffect } from 'react';
import options from '../assets/options.json';
import { FormInput, Form } from 'semantic-ui-react';

const Step7 = ({ setEmailValid, emailText }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false); // Local state for Step4 input


  

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    emailText(value);
  }

  useEffect(() => {
    // Check if email is valid when the email state changes
    const isValidEmail = email.includes('@') && email.includes('.');
    setEmailValid(isValidEmail);
    setIsValid(isValidEmail);
  }, [email, setEmailValid]);

  const stepContent = {
    title: options.step7[0].title,
  };

  return (
    <>
      <h3>{stepContent.title}</h3>
      <Form>
        <FormInput
          placeholder='Email adresini gir'
          value={email}
          onChange={handleInputChange}
          error={ !isValid && email.length > 0 && {
            content: 'Please enter a valid email address',
            
          }}
        />
        <p className='option-p'>
          Halı Yıkama talebini oluşturmak için email adresine ihtiyacımız var. 
          Bu bilgiyi kimseyle paylaşmıyoruz.
        </p>
      </Form>
    </>
  );
};

export default Step7;
