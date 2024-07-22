// App.jsx
// @charset "UTF-8";
/* -------------------------- */

import React, { useState, useEffect } from 'react';
import { Button, Progress, Message } from 'semantic-ui-react';
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import CloseModal from './CloseModal/CloseModal.jsx';
import options from "./assets/options.json";
import Step1 from './Step1/Step1.jsx';

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
    let stepContent = {
      title: "",
      description: "",
      options: []
    };

    if (step === 1) {
      stepContent = {
        title: options.step1[0].title,
        description: "",
        options: options.step1.slice(1)
      };

    } 
    
    else if (step === 2) {
      const selectedOptionValue = selectedOption;
      stepContent = {
        title: options.step2[selectedOptionValue][0].title,
        description: options.step2[selectedOptionValue][1].description,
        options: options.step2[selectedOptionValue].slice(2)
      };

      stepContent.options = stepContent.options.map(option => ({
        ...option,
        value: `${selectedOption} + ${option.value}`
      }));

    } 
    
    else if (step === 3) {
      stepContent = {
        title: options.step3[0].title,
        description: "",
        options: options.step3.slice(1)
      };
    } 
    
    else if (step === 4) {
      stepContent = {
        title: options.step4[0].title,
        description: options.step4[1].description,
        options: []
      };
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

  const renderStep4Content = () => (
    <div className='step4-content'>
      <p>{options.step4[1].örnekler}</p>
      <p>{options.step4[2].örnek1}</p>
      <p>{options.step4[3].örnek2}</p>
    </div>
  );

  const renderContent = () => {
    const stepContent = getStepContent();
    if (step === 1) {
      return <Step1 selectedStepOption={selectedStepOption} handleOptionClick={handleOptionClick} step={step} />;
    }
    return (
      <>
        <h3>{stepContent.title}</h3>
        <p className='option-p'>{stepContent.description}</p>
        {step === 4 ? renderStep4Content() : renderOptions(stepContent)}
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
          <Progress percent={(step / 5) * 100} color='green' size='tiny'/>
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
