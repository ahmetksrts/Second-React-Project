// Step5.jsx
import React, { useState } from 'react';
import options from '../assets/options.json';
import { Dropdown } from 'semantic-ui-react';

const Step5 = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const stepContent = options.step5;

  const iller = [
    { text: 'İstanbul', value: '34' },
    { text: 'Ankara', value: '06' },
    { text: 'İzmir', value: '35' }
  ];

  const ilçeler = {
    '34': [
      { key: 'kadıköy', text: 'Kadıköy', value: 'kadıköy' },
      { key: 'üsküdar', text: 'Üsküdar', value: 'üsküdar' },
      { key: 'ümraniye', text: 'Ümraniye', value: 'ümraniye' }
    ],
    '06': [
      { key: 'çankaya', text: 'Çankaya', value: 'çankaya' },
      { key: 'keçiören', text: 'Keçiören', value: 'keçiören' },
      { key: 'yenimahalle', text: 'Yenimahalle', value: 'yenimahalle' }
    ],
    '35': [
      { key: 'konak', text: 'Konak', value: 'konak' },
      { key: 'karşıyaka', text: 'Karşıyaka', value: 'karşıyaka' },
      { key: 'buca', text: 'Buca', value: 'buca' }
    ]
  };

  const handleCityChange = (e, { value }) => {
    setSelectedCity(value);
  };

  return (
    <>
      <h3>{stepContent[0].title}</h3>
      <Dropdown
        placeholder='İl'
        fluid
        selection
        options={iller}
        onChange={handleCityChange}
      />
      {selectedCity && (
        <Dropdown
          placeholder='İlçe'
          fluid
          selection
          options={ilçeler[selectedCity]}
        />
      )}
    </>
  );
};

export default Step5;
