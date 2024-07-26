/* App.jsx */
/* ------------------- */

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
import Step7 from './components/Step7.jsx';
import Step8 from './components/Step8.jsx';
import Step9 from './components/Step9.jsx';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [step, setStep] = useState(1);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [selectedStepOption, setSelectedStepOption] = useState({});
  const [priceRange, setPriceRange] = useState("350TL - 1.300TL");
  const [step4Input, setStep4Input] = useState("");

  const [isStep4InputValid, setIsStep4InputValid] = useState(false);
  const [isStep5InputValid, setIsStep5InputValid] = useState(false);
  const [isStep9InputValid, setIsStep9InputValid] = useState(false);

  const [emailValid, setEmailValid] = useState(false);
  const [adValid, setAdValid] = useState(false);
  const [soyadValid, setSoyadValid] = useState(false);


  const [selectedCity, setSelectedCity] = useState("");
  const [selectedİlçe, setSelectedİlçe] = useState("");
  const [selectedMahalle, setSelectedMahalle] = useState("");
  const [email, setEmail] = useState('');

  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');

  const [ülke, setÜlke] = useState('');
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');




  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleİlçeChange = (ilçe) => {
    setSelectedİlçe(ilçe);
  };

  const handleMahalleChange = (mahalle) => {
    setSelectedMahalle(mahalle);
  };



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
        // Retrieve the existing OPTIONS array from local storage, or create a new array if it doesn't exist
        const message = {step4Input};

        let optionsArray = JSON.parse(localStorage.getItem('OPTIONS')) || [];
      
        // Append the selectedStepOption to the OPTIONS array
        
        optionsArray.push(message);
      
        // Save the updated OPTIONS array back to local storage
        localStorage.setItem('OPTIONS', JSON.stringify(optionsArray));
        setStep(step + 1);
      }
    } else if (step === 5) {
      if (isStep5InputValid) {
        // TODO: create a new array called "selectedItems", and store selectedCity, selectedİlçe, selectedMahalle
        const selectedItems = {selectedCity, selectedİlçe, selectedMahalle};
        // Retrieve the existing OPTIONS array from local storage, or create a new array if it doesn't exist
        let optionsArray = JSON.parse(localStorage.getItem('OPTIONS')) || [];
      
        // Append the selectedStepOption to the OPTIONS array
        optionsArray.push(selectedItems);
      
        // Save the updated OPTIONS array back to local storage
        localStorage.setItem('OPTIONS', JSON.stringify(optionsArray));
        setStep(step + 1);
      }

    } else if (step === 7) {
      if (emailValid) {
        const selectedItem = {email};
        // Retrieve the existing OPTIONS array from local storage, or create a new array if it doesn't exist
        let optionsArray = JSON.parse(localStorage.getItem('OPTIONS')) || [];
      
        // Append the selectedStepOption to the OPTIONS array
        optionsArray.push(selectedItem);
      
        // Save the updated OPTIONS array back to local storage
        localStorage.setItem('OPTIONS', JSON.stringify(optionsArray));

        setStep(step + 1);
      }
    } 
    
    else if (selectedStepOption[step]) {
      console.log(selectedStepOption); // Log the selectedStepOption for debugging purposes
    
      // Retrieve the existing OPTIONS array from local storage, or create a new array if it doesn't exist
      let optionsArray = JSON.parse(localStorage.getItem('OPTIONS')) || [];
    
      // Append the selectedStepOption to the OPTIONS array
      optionsArray.push(selectedStepOption);
    
      // Save the updated OPTIONS array back to local storage
      localStorage.setItem('OPTIONS', JSON.stringify(optionsArray));
    
      // Proceed to the next step
      setStep(step + 1);
    }

    else if (step === 9) {
      if (isStep9InputValid) {
        const deneme = {ülke, text, number};
        let optionsArray = JSON.parse(localStorage.getItem('OPTIONS')) || [];
      
        // Append the selectedStepOption to the OPTIONS array
        
        optionsArray.push(deneme);
      
        // Save the updated OPTIONS array back to local storage
        localStorage.setItem('OPTIONS', JSON.stringify(optionsArray));

        setStep(step + 1);
      }
    }
    
    
    else if (step === 8) {
      if (adValid && soyadValid) {
        const adVeSoyad = {ad, soyad};
        let optionsArray = JSON.parse(localStorage.getItem('OPTIONS')) || [];
      
        // Append the selectedStepOption to the OPTIONS array
        optionsArray.push(adVeSoyad);
      
        // Save the updated OPTIONS array back to local storage
        localStorage.setItem('OPTIONS', JSON.stringify(optionsArray));
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      
      
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
      return <Step5 setIsStep5InputValid={setIsStep5InputValid} setCity={handleCityChange} setİlçe={handleİlçeChange} setMahalle={handleMahalleChange} />;
    }
    if (step === 6) {
      return <Step6 selectedStepOption={selectedStepOption} handleOptionClick={handleOptionClick} step={step} />;
    }
    if (step === 7) {
      return <Step7 setEmailValid={setEmailValid} emailText={setEmail}/>;
    }

    if (step === 8) {
      return <Step8 setAdValid={setAdValid} setSoyadValid={setSoyadValid} adText={setAd} soyadText={setSoyad}/>;
    }

    if (step === 9) {
      return <Step9 ülke={setÜlke} textInput={setText} number={setNumber} setIsStep9InputValid={setIsStep9InputValid} />;
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
             step === 6 ? "%100 TAMAMLANDI" :
             step === 7 ? "%100 TAMAMLANDI" :
             step === 8 ? "%100 TAMAMLANDI" :
             step === 9 ? "%100 TAMAMLANDI" : "Halı Yıkama"}
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
        <Button className='continue-button' onClick={handleContinue}>{ step === 9 ? 'TALEBİ GÖNDER': 'DEVAM'}</Button>
        
      </div>
      {isCloseModalOpen && <CloseModal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
