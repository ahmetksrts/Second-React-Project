/* App.jsx */
// @charset "UTF-8";
/* -------------------------- */

import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import CloseModal from './CloseModal/CloseModal.jsx';
import options from "./assets/options.json";
import { Progress } from 'semantic-ui-react'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [step, setStep] = useState(1);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [selectedStepOption, setSelectedStepOption] = useState({});
  const [priceRange, setPriceRange] = useState("350TL - 1.300TL");

  useEffect(() => {
    setSelectedStepOption({});
  }, [step]);

  const handleOptionClick = (step, option) => {
    setSelectedOption(step === 1 ? option.value : selectedOption);
    setSelectedStepOption(prev => ({ ...prev, [step]: option.value }));
    setPriceRange(option.price || priceRange);
  };

  const handleContinue = () => {
    if (selectedStepOption[step]) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setSelectedStepOption(prev => {
        const updatedOptions = { ...prev };
        delete updatedOptions[step];
        return updatedOptions;
      });
      if (step === 2) {
        setPriceRange("350TL - 1.300TL");
      }
      setStep(step - 1);
    }
  };

  const handleClose = () => setIsCloseModalOpen(true);
  const handleCloseModal = () => setIsCloseModalOpen(false);

  const getStepContent = () => {
    const titles = ["Halı nerede yıkansın?", "Kaç metrekare halı yıkanacak?", "Çıkarılmasını istediğin lekeler var mı?"];
    const descriptions = ["", "Büyük oda halıları 6m2'dir ve çoğu halı 1 ila 6m2 arasındadır. En yakın seçeneği seçmen yeterli.", ""];

    let stepContent = {
      title: titles[step - 1],
      description: descriptions[step - 1],
      options: []
    };

    if (step === 2) {
      const selectedOptionValue = selectedOption;
      stepContent.options = options.step2[selectedOptionValue] || options.step2.other;

      stepContent.options = stepContent.options.map(option => ({
        ...option,
        value: `${selectedOption} + ${option.value}`
      }));
    } else {
      stepContent.options = options[`step${step}`];
    }

    return stepContent;
  };

  const renderOptions = (stepContent) => (
    <div className='options'>
      {stepContent.options.map(option => (
        <Button
          key={option.value}
          className={`option-button ${selectedStepOption[step] === option.value ? 'on' : ''}`}
          onClick={() => handleOptionClick(step, option)}
        >
          {option.label}
          {selectedStepOption[step] === option.value && <i className="check icon"></i>}
        </Button>
      ))}
    </div>
  );

  const renderContent = () => {
    const stepContent = getStepContent();
    return (
      <>
        <h3>{stepContent.title}</h3>
        <p className='option-p'>{stepContent.description}</p>
        {renderOptions(stepContent)}
      </>
    );
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
          <button className='close-button' onClick={handleClose}><i className="close icon"></i></button>
        </div>

        <div className='progressbar'>
          <Progress percent={83} color='green' size='tiny'/>
        </div>

        <div className='price-range'>
          <p>Ortalama fiyat aralığı:</p>
          <p>{priceRange}</p>
        </div>
        
        {renderContent()}
        <Button className='continue-button' onClick={handleContinue}>DEVAM</Button>
      </div>
      {isCloseModalOpen && <CloseModal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
