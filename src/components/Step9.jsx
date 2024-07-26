/* Step9.jsx */
/* ----------------- */

import React, { useState, useEffect, Component } from 'react';
import options from '../assets/options.json';
import { Button, Dropdown, FormInput, FormCheckbox, Form, Checkbox } from 'semantic-ui-react';
import './Step9.css';
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from 'semantic-ui-react';

const stepContent = {
  title: options.step9[0].title,
  p: options.step9[1].leftd,
  phoneNum: options.step9[2].rightd,
  bottomp: options.step9[3].bottomd1,
  pvisible: options.step9[5].pvisible
  
};

const panels = [
  {
    key: 'accept',
    title: 'I agree and accept the terms',
    content: {
      content: (
        <p className='panel-p'>Armut Teknoloji A.Ş. ile paylaştığım kişisel verilerimin Aydınlatma Metni kapsamında internet sitesinin çalışması, yönetimi, aracı hizmet sağlayıcılığı, müşteri ilişkileri ve elektronik iletişim için kullanılan bulut bilişim programlarıyla, sunucuları yurt dışında bulunan iş ortaklarına aktarılmasına izin veriyorum.</p>
      )
    }
  },
]

const Step9 = () => {


  const günler = [
    { key: 'tem24', text: 'Temmuz 24, 2024', value: '24' },
    { key: 'tem25', text: 'Temmuz 25, 2024', value: '25' },
    { key: 'tem26', text: 'Temmuz 26, 2024', value: '26' },
    { key: 'tem27', text: 'Temmuz 27, 2024', value: '27' },
    { key: 'tem28', text: 'Temmuz 28, 2024', value: '28' },
    { key: 'tem29', text: 'Temmuz 29, 2024', value: '29' },
    { key: 'tem30', text: 'Temmuz 30, 2024', value: '30' },
    { key: 'tem31', text: 'Temmuz 31, 2024', value: '31' },
    { key: 'ağu1', text: 'Ağustos 1, 2024', value: '1' }

    
  ];

  const saatler = [
    { key: '9', text: '09:00', value: '9' },
    { key: '10', text: '10:00', value: '10' },
    { key: '11', text: '11:00', value: '11' }


    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  

  return (
    <>
    <h3>{stepContent.title}</h3>
        <div className='step9-dropdown-container'>
        
            <Dropdown
                text={stepContent.p} // TODO: add options.p here
                fluid
                selection
                options={saatler}
                className='step9-dropdown-left'
            />
            
            <FormInput
                className='step9-form-right' 
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                placeholder={stepContent.phoneNum}
            />
        </div>

        <div className='bottom-dropdown'>
            <Dropdown
                text={stepContent.bottomp} // TODO: add options.p here
                fluid
                selection
                options={günler}
                
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
              <FormCheckbox inline label='I agree' />
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
              <FormCheckbox inline label='I agree' required />
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
