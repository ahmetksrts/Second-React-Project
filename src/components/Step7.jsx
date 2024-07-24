/* Step7.jsx */
/* ----------------- */

import React, { useState, useEffect } from 'react';
import options from '../assets/options.json';
import { FormInput, Form } from 'semantic-ui-react';

const Step7 = ({ setEmailValid }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Check if email is valid when the email state changes
    const isValidEmail = email.includes('@') && email.includes('.');
    setEmailValid(isValidEmail);
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
          onChange={(e) => setEmail(e.target.value)}
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
