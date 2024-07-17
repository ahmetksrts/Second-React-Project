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
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderContent = () => {
    if (step === 1) {
      return (
        <>
          <h3> Halı nerede yıkansın? </h3>
          <div className='options'>
            <Button className={`option-button ${selectedOption === 'option1' ? 'on' : ''}`} onClick={() => handleOptionClick('option1', '400TL - 1.150TL')}>
              Adresten alınıp teslim edilsin
              {selectedOption === 'option1' && <i className="check icon"></i>}
            </Button>
            <Button className={`option-button ${selectedOption === 'option2' ? 'on' : ''}`} onClick={() => handleOptionClick('option2', '550TL - 3.200TL')}>
              Evde halı temizliği yapılsın
              {selectedOption === 'option2' && <i className="check icon"></i>}
            </Button>
            <Button className={`option-button ${selectedOption === 'option3' ? 'on' : ''}`} onClick={() => handleOptionClick('option3', '1.000TL - 10.000TL')}>
              Ofiste halı temizliği yapılsın
              {selectedOption === 'option3' && <i className="check icon"></i>}
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h3>{selectedOption === 'option1' ? 'Kaç metrekare halı yıkanacak?' : `Yeni Adım: ${selectedOption}`}</h3>
          <p>{selectedOption === 'option1' ? "Büyük oda halıları 6m2'dir ve çoğu halı 1 ila 6m2 arasındadır. En yakın seçeneği seçmen yeterli." : ''}</p>
          {selectedOption === 'option1' && (
            <div className='options'>
              <Button className='option-button'>5</Button>
              <Button className='option-button'>10</Button>
              <Button className='option-button'>15</Button>
              <Button className='option-button'>20</Button>
              <Button className='option-button'>25</Button>
              <Button className='option-button'>30</Button>
              <Button className='option-button'>40</Button>
              <Button className='option-button'>50</Button>
              <Button className='option-button'>60</Button>
              <Button className='option-button'>80 ve daha fazla</Button>
              
            </div>
          )}
        </>
      );
    }
  };

  return (
    <div className='container'>
      <div className='modal'>
        <div className='header'>
          {step > 1 && (
            <button className='back-button' onClick={handleBack}>
              <i className="arrow left icon"></i>
            </button>
          )}
          <h2 className='title'>Halı Yıkama</h2>
          <button className='close-button'> <i className="close icon"></i> </button>
        </div>
        <div className='price-range'>
          <p>Ortalama fiyat aralığı:</p>
          <p>{priceRange}</p>
        </div>
        {renderContent()}
        <Button className='continue-button' onClick={handleContinue}>DEVAM</Button>
      </div>
    </div>
  );
};

export default App;
