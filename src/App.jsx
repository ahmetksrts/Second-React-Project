/* App.jsx */
/* ------------- */
// @charset "UTF-8";
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import "./App.css";
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [priceRange, setPriceRange] = useState("350TL - 1.300TL");
  const [step, setStep] = useState(1);

  const handleOptionClick = (option, price) => {
    setSelectedOption(option);
    setPriceRange(price);
  };

  const handleContinue = () => {
    if (selectedOption) {
      setStep(step + 1);
      setSelectedOption(null); // Reset selection for next step
      setPriceRange("350TL - 1.300TL"); // Reset price range for next step
    }
  };

  const renderContent = () => {
    if (step === 1) {
      return (
        <>
          <h3> Halı nerede yıkansın? </h3>
          <div className='options'>
            <Button className={`option-button ${selectedOption === 'option1' ? 'on' : ''}`} onClick={() => handleOptionClick('option1', '400TL - 1.150TL')}>Adresten alınıp teslim edilsin</Button>
            <Button className={`option-button ${selectedOption === 'option2' ? 'on' : ''}`} onClick={() => handleOptionClick('option2', '550TL - 3.200TL')}>Evde halı temizliği yapılsın</Button>
            <Button className={`option-button ${selectedOption === 'option3' ? 'on' : ''}`} onClick={() => handleOptionClick('option3', '1.000TL - 10.000TL')}>Ofiste halı temizliği yapılsın</Button>
          </div>
          <Button className='continue-button' onClick={handleContinue}>DEVAM</Button>
        </>
      );
    } else {
      return (
        <>
          <h3> Yeni Adım: {selectedOption}</h3>
          <Button className='continue-button' onClick={handleContinue}>Sonraki Adım</Button>
        </>
      );
    }
  };

  return (
    <div className='container'>
      <div className='modal'>
        <div className='header'>
          <h2 className='title'>{step === 1 ? 'Halı Yıkama' : 'Yeni Adım'}</h2>
          <button className='close-button'> <i className="close icon"></i> </button>
        </div>
        <div className='price-range'>
          <p>Ortalama fiyat aralığı:</p>
          <p>{priceRange}</p>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
