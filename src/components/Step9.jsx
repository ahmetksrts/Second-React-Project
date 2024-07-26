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
  pvisible: options.step9[5].pvisible,
  bottomd2: options.step9[4].bottomd2
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


  const ülkeler = [
    { key: 'tr', text: 'TR +90', value: 'tr' },
    { key: 'uk', text: 'UK +44', value: 'uk' },
    { key: 'de', text: 'DE +49', value: 'de' }

    
  ];

  const textler = [
    { key: (stepContent.bottomp), text: (stepContent.bottomp), value: (stepContent.bottomp) },
    { key: (stepContent.bottomd2), text: (stepContent.bottomd2), value: (stepContent.bottomd2) }


    
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
                placeholder={stepContent.p} // TODO: add options.p here
                fluid
                selection
                options={ülkeler}
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
                placeholder={stepContent.bottomp} // TODO: add options.p here
                fluid
                selection
                options={textler}
                
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
