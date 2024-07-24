/* App.jsx */
/* ------------------- */

/* App.jsx */
import React, { useState, useEffect } from 'react';
import { Button, Progress } from 'semantic-ui-react';
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import CloseModal from './CloseModal/CloseModal.jsx';
import options from "./assets/options.json";
import Step1 from './components/Step1.jsx';
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';
import Step4 from './components/Step4.jsx';
import Step5 from './components/Step5.jsx';
import Step6 from './components/Step6.jsx';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [step, setStep] = useState(1);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [selectedStepOption, setSelectedStepOption] = useState({});
  const [priceRange, setPriceRange] = useState("350TL - 1.300TL");
  const [step4Input, setStep4Input] = useState("");
  const [isStep4InputValid, setIsStep4InputValid] = useState(false);
  const [isStep5InputValid, setIsStep5InputValid] = useState(false);


  useEffect(() => {
    setSelectedStepOption({});
  }, [step]);

  const handleOptionClick = (step, option) => {
    setSelectedOption(step === 1 ? option.value : selectedOption);
    setSelectedStepOption(prev => ({ ...prev, [step]: option.value }));
    setPriceRange(option.price || priceRange);
  };


  const handleContinue = () => {
    if (step === 4) {
      if (isStep4InputValid) {
        setStep(step + 1);
      }
    }
    
    if (step === 5) {
      if (isStep5InputValid) {
        setStep(step + 1);
      }
    }
    else if (step !== 4 && selectedStepOption[step]) {
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
    <Step4
      selectedStepOption={selectedStepOption}
      handleOptionClick={handleOptionClick}
      step={step}
      setStep4Input={setStep4Input}
      setIsStep4InputValid={setIsStep4InputValid}
    />
  );

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const renderContent = () => {
    if (step === 1) {
      return <Step1 selectedStepOption={selectedStepOption} handleOptionClick={handleOptionClick} step={step} />;
    }
    if (step === 2) {
      return <Step2 selectedStepOption={selectedStepOption} handleOptionClick={handleOptionClick} step={step} selectedOption={selectedOption} />;
    }
    if (step === 3) {
      return <Step3 selectedStepOption={selectedStepOption} handleOptionClick={handleOptionClick} step={step} />;
    }
    if (step === 4) {
      return renderStep4Content();
    }
    if (step === 5) {
      return <Step5 goToNextStep={goToNextStep} />;
    }
    if (step === 6) {
      return <Step6 selectedStepOption={selectedStepOption} handleOptionClick={handleOptionClick} step={step} />;
    }
    return (
      <>
        <h3>{getStepContent().title}</h3>
        <p className='option-p'>{getStepContent().description}</p>
        {step === 4 ? renderStep4Content() : renderOptions(getStepContent())}
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
          <h2 className='title'>
            {step === 4 ? "%70 TAMAMLANDI" : step === 5 ? "%80 TAMAMLANDI" :
             step === 6 ? "%100 TAMAMLANDI" : "Halı Yıkama"}
          </h2>
          <button className='close-button' onClick={handleClose}><i className="close icon"></i></button>
        </div>

        <div className='progressbar'>
          <Progress percent={(step / 6) * 100} color='green' size='tiny'/>
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
