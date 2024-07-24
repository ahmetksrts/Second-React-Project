/* Step8.jsx */
/* ----------------- */

import React, { useState, useEffect } from 'react';
import options from '../assets/options.json';
import { FormField, Form, Message } from 'semantic-ui-react';

const Step8 = ({ setAdValid, setSoyadValid }) => {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [adError, setAdError] = useState('');
  const [soyadError, setSoyadError] = useState('');

  useEffect(() => {
    // Check if 'ad' and 'soyad' are valid
    const isValidAd = /^[a-zA-Z]+$/.test(ad);
    const isValidSoyad = /^[a-zA-Z]+$/.test(soyad);

    setAdValid(isValidAd);
    setSoyadValid(isValidSoyad);

    // Set error messages based on validity
    setAdError(isValidAd ? '' : 'Geçersiz ad. Sadece harfler girilmelidir.');
    setSoyadError(isValidSoyad ? '' : 'Geçersiz soyad. Sadece harfler girilmelidir.');
  }, [ad, soyad, setAdValid, setSoyadValid]);

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
          <input
            placeholder='Adın'
            value={ad}
            onChange={(e) => setAd(e.target.value)}
          />
          {adError && (
            <Message
              error
              header='Hata'
              content={adError}
            />
          )}
        </FormField>

        <FormField>
          <input
            placeholder='Soyadın'
            value={soyad}
            onChange={(e) => setSoyad(e.target.value)}
          />
          {soyadError && (
            <Message
              error
              header='Hata'
              content={soyadError}
            />
          )}
        </FormField>
      </Form>
    </>
  );
};

export default Step8;
