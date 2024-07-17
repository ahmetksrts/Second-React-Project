/* App.jsx */
// @charset "UTF-8";
/* ------------- */

import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import CloseModal from './CloseModal/CloseModal.jsx';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [priceRange, setPriceRange] = useState("350TL - 1.300TL");
  const [step, setStep] = useState(1);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [selectedStep2Option, setSelectedStep2Option] = useState(null); // Yeni state
  const [canContinue, setCanContinue] = useState(false); // Yeni state
  const [price2Range, setPrice2Range] = useState();
  const [selectedStep3Option, setSelectedStep3Option] = useState(null); // Yeni state
  const [price3Range, setPrice3Range] = useState();


  useEffect(() => {
    if (step === 1 && selectedOption) {
      setCanContinue(true);
    } 
    
    else if (step === 2 && selectedStep2Option) {
      setCanContinue(true);
    } 
    
    else {
      setCanContinue(false);
    }
  }, [step, selectedOption, selectedStep2Option]);

  const handleOptionClick = (option, price) => {
    setSelectedOption(option);
    setPriceRange(price);
  };

  const handleStep2OptionClick = (option, price) => { // Yeni handle function
    setSelectedStep2Option(option);
    setPrice2Range(price);

  };

  const handleStep3OptionClick = (option, price) => { // Yeni handle function
    setSelectedStep3Option(option);
    setPrice3Range(price);

  };

  const handleContinue = () => {
    if (canContinue) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    setIsCloseModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCloseModalOpen(false);
  };

  const getPriceRange = () => {
    if(selectedStep2Option){
      return(price2Range)
    }
    else{
      return(priceRange)
    }
  }

  const getStepContent = () => {
    const content1 = (
      <div className='options'>
        <Button className={`option-button ${selectedStep2Option === '5' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('5', "300TL - 800TL")}>
          5
          {selectedStep2Option === '5' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '10' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('10', "400TL - 800TL")}>
          10
          {selectedOption === '10' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '15' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('15', "500TL - 1.000TL")}>
          15
          {selectedOption === '15' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '20' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('20', "500TL - 1.200TL")}>
          20
          {selectedOption === '20' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '25' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('25', "500TL - 1.400TL")}>
          25
          {selectedOption === '25' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '30' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('30', "560TL - 1.500TL")}>
          30
          {selectedOption === '30' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '40' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('40', "750TL - 1.900TL")}>
          40
          {selectedOption === '40' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '50' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('50', "500TL - 2.000TL")}>
          50
          {selectedOption === '50' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '60' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('60', "400TL - 2.100TL")}>
          60
          {selectedOption === '60' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedOption === '80' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('80', "420TL - 2.100TL")}>
          80 ve daha fazla
          {selectedOption === '80' && <i className="check icon"></i>}
        </Button>
        
      </div>
    );

    const content2 = (
      <div className='options'>
        <Button className={`option-button ${selectedStep2Option === '10' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('10')}>
          10
          {selectedStep2Option === '10' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '15' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('15')}>
          15
          {selectedStep2Option === '15' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '20' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('20')}>
          20
          {selectedStep2Option === '20' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '25' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('25')}>
          25
          {selectedStep2Option === '25' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '30' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('30')}>
          30
          {selectedStep2Option === '30' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '40' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('40')}>
          40
          {selectedStep2Option === '40' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '50' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('50')}>
          50
          {selectedStep2Option === '50' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '60' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('60')}>
          60
          {selectedStep2Option === '60' && <i className="check icon"></i>}
        </Button>
        <Button className={`option-button ${selectedStep2Option === '80' ? 'on' : ''}`} onClick={() => handleStep2OptionClick('80 ve daha fazla')}>
          80 ve daha fazla
          {selectedStep2Option === '80' && <i className="check icon"></i>}
        </Button>
      </div>
    );

    const content3= (
      <div>
        <Button className={`option-button ${selectedStep3Option === 'Evet' ? 'on' : ''}`} onClick={() => handleStep3OptionClick('Evet', "")}>
          Evet, çıkarılması gereken lekeler var
          {selectedStep2Option === '10' && <i className="check icon"></i>}
        </Button>
      </div>
    );

    if (selectedOption === 'option1') {
      return {
        title: 'Kaç metrekare halı yıkanacak?',
        description: "Büyük oda halıları 6m2'dir ve çoğu halı 1 ila 6m2 arasındadır. En yakın seçeneği seçmen yeterli.",
        content: content1
      };
    } 
    
    else if (selectedOption === 'option2') {
      return {
        title: 'Kaç metrekare halı yıkanacak?',
        description: "Büyük oda halıları 6m2'dir ve çoğu halı 1 ila 6m2 arasındadır. En yakın seçeneği seçmen yeterli.",
        content: content2
      };
    } 
    
    else if (selectedOption === 'option3') {
      return {
        title: 'Kaç metrekare halı yıkanacak?',
        description: 'En yakın seçeneği seçmen yeterli.',
        content: content2
      };
    }
  };

  const getStep3Content = () => {
    if(selectedStep2Option){
      return{
        title: "Çıkarılmasını istediğin lekeler var mı?"
      }
    }
  }

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
    } 
    
    else if (step === 2) {
      const stepContent = getStepContent();
      return (
        <>
          <h3>{stepContent.title}</h3>
          <p className='option-p'>{stepContent.description}</p>
          <div>{stepContent.content}</div>
        </>
      );
    }

    else if (step === 3) {
      const step3Content = getStep3Content();
      return (
        <>
          <h3>{step3Content.title}</h3>
        </>
      );
    }
  };

  return (
    <div className='container'>
      <div className={`modal ${isCloseModalOpen ? 'hidden' : ''}`}>
        <div className='header'>
          {step > 1 && (
            <button className='back-button' onClick={handleBack}>
              <i className="arrow left icon"></i>
            </button>
          )}
          <h2 className='title'>Halı Yıkama</h2>
          <button className='close-button' onClick={handleClose}> <i className="close icon"></i> </button>
        </div>
        <div className='price-range'>
          <p>Ortalama fiyat aralığı:</p>
          <p>{getPriceRange()}</p>
        </div>
        {renderContent()}
        <Button className='continue-button' onClick={handleContinue}>DEVAM</Button>
      </div>
      {isCloseModalOpen && <CloseModal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
