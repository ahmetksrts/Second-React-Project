/* Step8.jsx */
/* ----------------- */

import React, { useState, useEffect } from 'react';
import options from '../assets/options.json';
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react';


const Step8 = ({setAdValid, setSoyadValid}) => {
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');


    useEffect(() => {
        // Check if email is valid when the email state changes
        const isValidAd = ad.includes('A');
        const isValidSoyad = soyad.includes('K');
        setAdValid(isValidAd);
        setSoyadValid(isValidSoyad);

    }, [ad, setAdValid, soyad, setSoyadValid]);
    
    const stepContent = {
        title: options.step8[0].title,
        p: options.step8[1].p
    };


  return (
    <>
      <h3>{stepContent.title}</h3>
      <p className='option-p'>{stepContent.p}</p>
      <Form>
        <FormField>
            <input placeholder='Adın'
                value={ad}
                onChange={(e) => setAd(e.target.value)}
            />
        </FormField>

        <FormField>
            <input placeholder='Soyadın'
                value={soyad}
                onChange={(e) => setSoyad(e.target.value)}
            />
        </FormField>

        
    </Form>
    </>
  );
};

export default Step8;
