// Step5.jsx

import React, { useState } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import options from '../assets/options.json';
import "./Step5.css";

const Step5 = ({ goToNextStep }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedİlçe, setSelectedİlçe] = useState(null);
  const [selectedMahalle, setSelectedMahalle] = useState(null);

  const stepContent = options.step5;

  const iller = [
    { key: 'ist', text: 'İstanbul', value: '34' },
    { key: 'ank', text: 'Ankara', value: '06' },
    { key: 'izm', text: 'İzmir', value: '35' }
  ];

  const ilçeler = {
    '34': [
      { key: 'kadıköy', text: 'Kadıköy', value: '341' },
      { key: 'üsküdar', text: 'Üsküdar', value: '342' },
      { key: 'ümraniye', text: 'Ümraniye', value: '343' }
    ],
    '06': [
      { key: 'çankaya', text: 'Çankaya', value: '061' },
      { key: 'keçiören', text: 'Keçiören', value: '062' },
      { key: 'yenimahalle', text: 'Yenimahalle', value: '063' }
    ],
    '35': [
      { key: 'konak', text: 'Konak', value: '351' },
      { key: 'karşıyaka', text: 'Karşıyaka', value: '352' },
      { key: 'buca', text: 'Buca', value: '353' }
    ]
  };

  const mahalleler = {
    '341': [
      { key: 'kadıköy', text: 'Acıbadem', value: 'kadıköy' },
      { key: 'üsküdar', text: 'Bostancı', value: 'üsküdar' },
      { key: 'ümraniye', text: 'Caddebosan', value: 'ümraniye' }
    ],
    '342': [
      { key: 'çankaya', text: 'Ahmediye', value: 'çankaya' },
      { key: 'keçiören', text: 'Altunizade', value: 'keçiören' },
      { key: 'yenimahalle', text: 'Barbaros', value: 'yenimahalle' }
    ],
    '343': [
      { key: 'konak', text: 'Altınşehir', value: 'konak' },
      { key: 'karşıyaka', text: 'Atakent', value: 'karşıyaka' },
      { key: 'buca', text: 'Esenevler', value: 'buca' }
    ]
  };

  const handleCityChange = (e, { value }) => {
    setSelectedCity(value);
    setSelectedİlçe(null); // Reset İlçe and Mahalle
    setSelectedMahalle(null);
  };

  const handleİlçeChange = (e, { value }) => {
    setSelectedİlçe(value);
    setSelectedMahalle(null); // Reset Mahalle
  };

  const handleMahalleChange = (e, { value }) => {
    setSelectedMahalle(value);
  };

  const handleDevamClick = () => {
    if (selectedCity && selectedİlçe && selectedMahalle) {
      goToNextStep(); // Call the function to transition to Step6
    } 
  };

  return (
    <>
      <h3>{stepContent[0].title}</h3>
      <div className='dropdown-container'>
        <Dropdown
          placeholder='İl'
          fluid
          selection
          options={iller}
          onChange={handleCityChange}
          value={selectedCity}
        />
        <Dropdown
          placeholder='İlçe'
          fluid
          selection
          options={selectedCity ? ilçeler[selectedCity] : []}
          onChange={handleİlçeChange}
          value={selectedİlçe}
        />
        <Dropdown
          placeholder='Mahalle'
          fluid
          selection
          options={selectedİlçe ? mahalleler[selectedİlçe] : []}
          onChange={handleMahalleChange}
          value={selectedMahalle}
        />
      </div>
    </>
  );
};

export default Step5;
