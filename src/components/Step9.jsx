/* Step9.jsx */
/* ----------------- */

import React, { useState, useEffect } from 'react';
import options from '../assets/options.json';
import { Button, Dropdown, FormInput, FormCheckbox, Form, Checkbox } from 'semantic-ui-react';
import './Step9.css';
import { AccordionTitle, AccordionContent, Accordion, Icon } from 'semantic-ui-react';

const Step9 = ( {ülke, textInput, number, setIsStep9InputValid, setChecked} ) => {
  const [canContinue, setCanContinue] = useState(false);
  const [selectedÜlke, setSelectedÜlke] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectCheck, setSelectCheck] = useState(false);

  const [isValid, setIsValid] = useState(false); // Local state for input validation

  const stepContent = {
    title: options.step9[0].title,
    p: options.step9[1].leftd,
    phoneNum: options.step9[2].rightd,
    bottomp: options.step9[3].bottomd1,
    pvisible: options.step9[5].pvisible,
    bottomd2: options.step9[4].bottomd2
  };


  const ülkeler = [
    { key: 'tr', text: 'TR +90', value: 'tr' },
    { key: 'uk', text: 'UK +44', value: 'uk' },
    { key: 'de', text: 'DE +49', value: 'de' }

    
  ];

  const textler = [
    { key: (stepContent.bottomp), text: (stepContent.bottomp), value: (stepContent.bottomp) },
    { key: (stepContent.bottomd2), text: (stepContent.bottomd2), value: (stepContent.bottomd2) }


    
  ];

  const handleÜlkeChange = (e, { value }) => {
    
    setSelectedÜlke(value);
    ülke(value);
  };

  const handleTextChange = (e, { value }) => {
    
    setSelectedText(value);
    textInput(value);
  };

  const handleNNumberChange = (e, { value }) => {
    
    setSelectedNumber(value);
    number(value);
  };

  const handleCheckboxChange = (e, { checked }) => {
    setSelectCheck(checked); // Update checkbox state
    setChecked(checked);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  
  const validateInput = () => {
    if (selectedÜlke && selectedText && selectedNumber && selectCheck) {
      return true;// Call the function to transition to Step6
    }
  };

  useEffect(() => {
    // Validate the input when the component mounts or when the input changes
    const isInputValid = validateInput();
    setIsValid(isInputValid);
    setIsStep9InputValid(isInputValid);
  }, [selectedÜlke, selectedText, selectedNumber, selectCheck, setIsStep9InputValid]);

  return (
    <>
    <h3>{stepContent.title}</h3>
        <div className='step9-dropdown-container'>
        
            <Dropdown
                placeholder={stepContent.p} // TODO: add options.p here
                fluid
                selection
                options={ülkeler}
                className='step9-dropdown-left'
                onChange={handleÜlkeChange}
                value={selectedÜlke}
                
            />
            
            <FormInput
                className='step9-form-right' 
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                placeholder={stepContent.phoneNum}
                onChange={handleNNumberChange}
                value={selectedNumber}
            />
        </div>

        <div className='bottom-dropdown'>
            <Dropdown
                placeholder={stepContent.bottomp} // TODO: add options.p here
                fluid
                selection
                options={textler}
                className='step9-dropdown-bottom'
                onChange={handleTextChange}
                value={selectedText}
            />
        </div>

        <p className='option-p'>{stepContent.pvisible}</p>

        <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <div className='step9-accordion1'>
            
            <Form>
              <FormCheckbox inline label='İletişim izni' />
            </Form>

            <Icon name='dropdown' className='step9-accordion1-icon'/>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p className='step9-accordion1-p'>
          Bana özel kampanya ve indirimlerden haberdar olmak için (Rıza Metni kapsamında) elektronik ileti almak istiyorum.
          </p>
        </Accordion.Content>

        </Accordion>

        <Accordion>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <div className='step9-accordion1'>
            
            <Form>
              <FormCheckbox checked={selectCheck} onChange={handleCheckboxChange} inline label='Kişisel Veri İşleme ve Aktarım İzni' required />
            </Form>

            <Icon name='dropdown' className='step9-accordion1-icon'/>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p className='step9-accordion1-p'>
          Armut Teknoloji A.Ş. ile paylaştığım kişisel verilerimin Aydınlatma Metni kapsamında internet sitesinin çalışması, yönetimi, aracı hizmet sağlayıcılığı, müşteri ilişkileri ve elektronik iletişim için kullanılan bulut bilişim programlarıyla, sunucuları yurt dışında bulunan iş ortaklarına aktarılmasına izin veriyorum.
          </p>
        </Accordion.Content>

        </Accordion>
        
    </>
  )
};

export default Step9;
