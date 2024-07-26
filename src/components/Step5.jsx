// Step5.jsx

// Step5.jsx
import React, { useState, useEffect } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import options from '../assets/options.json';
import "./Step5.css";

const Step5 = ({ setCity, setİlçe, setMahalle, setIsStep5InputValid }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedİlçe, setSelectedİlçe] = useState(null);
  const [selectedMahalle, setSelectedMahalle] = useState(null);

  const [input, setInput] = useState(""); // Local state for Step4 input
  const [isValid, setIsValid] = useState(false); // Local state for input validation


  const stepContent = options.step5;

  const iller = [
    { key: 'ist', text: 'İstanbul', value: 'İstanbul' },
    { key: 'ank', text: 'Ankara', value: 'Ankara' },
    { key: 'izm', text: 'İzmir', value: 'İzmir' }
  ];

  const ilçeler = {
    'İstanbul': [
      { key: 'kadıköy', text: 'Kadıköy', value: 'Kadıköy' },
      { key: 'üsküdar', text: 'Üsküdar', value: 'Üsküdar' },
      { key: 'ümraniye', text: 'Ümraniye', value: 'Ümraniye' }
    ],
    'Ankara': [
      { key: 'çankaya', text: 'Çankaya', value: '061' },
      { key: 'keçiören', text: 'Keçiören', value: '062' },
      { key: 'yenimahalle', text: 'Yenimahalle', value: '063' }
    ],
    'İzmir': [
      { key: 'konak', text: 'Konak', value: '351' },
      { key: 'karşıyaka', text: 'Karşıyaka', value: '352' },
      { key: 'buca', text: 'Buca', value: '353' }
    ]
  };

  const mahalleler = {
    'Kadıköy': [
      { key: 'kadıköy', text: 'Acıbadem', value: 'Acıbadem' },
      { key: 'üsküdar', text: 'Bostancı', value: 'Bostancı' },
      { key: 'ümraniye', text: 'Caddebosan', value: 'Caddebosan' }
    ],
    'Üsküdar': [
      { key: 'çankaya', text: 'Ahmediye', value: 'Ahmediye' },
      { key: 'keçiören', text: 'Altunizade', value: 'Altunizade' },
      { key: 'yenimahalle', text: 'Barbaros', value: 'Barbaros' }
    ],
    'Ümraniye': [
      { key: 'konak', text: 'Altınşehir', value: 'Altınşehir' },
      { key: 'karşıyaka', text: 'Atakent', value: 'Atakent' },
      { key: 'buca', text: 'Esenevler', value: 'Esenevler' }
    ]
  };

  

  const handleCityChange = (e, { value }) => {
    
    setSelectedCity(value);
    setCity(value);
    setSelectedİlçe(null); // Reset İlçe and Mahalle
    setSelectedMahalle(null);
  };

  const handleİlçeChange = (e, { value }) => {
    setİlçe(selectedİlçe);
    setSelectedİlçe(value);
    setİlçe(value);
    setSelectedMahalle(null); // Reset Mahalle
  };

  const handleMahalleChange = (e, { value }) => {
    setMahalle(selectedMahalle);
    setSelectedMahalle(value);
    setMahalle(value);
  };

  const validateInput = () => {
    if (selectedCity && selectedİlçe && selectedMahalle) {
      return true;// Call the function to transition to Step6
    }
  };

  useEffect(() => {
    // Validate the input when the component mounts or when the input changes
    const isInputValid = validateInput();
    setIsValid(isInputValid);
    setIsStep5InputValid(isInputValid);
  }, [selectedCity, selectedİlçe, selectedMahalle, setIsStep5InputValid]);

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