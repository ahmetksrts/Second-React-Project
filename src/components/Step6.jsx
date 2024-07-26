// Step6.jsx
// @charset "UTF-8";
/* -------------------------- */

import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import options from '../assets/options.json';
import './Step6.css'; // Ensure to include this CSS file

const Step6 = ({ selectedStepOption, handleOptionClick, step }) => {
  const stepContent = {
    title: options.step6[0].title,
    description: "",
    options: options.step6.slice(1)
  };

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

  const isOption61Selected = selectedStepOption[step] === "Belli bir zaman (üç hafta içinde)";

  return (
    <>
      <h3>{stepContent.title}</h3>
      <div className='step6-options'>
        {stepContent.options.map((option, index) => (
          <React.Fragment key={option.value}>
            {/* Render option button */}
            <Button
              className={`option-button ${selectedStepOption[step] === option.value ? 'on' : ''}`}
              onClick={() => handleOptionClick(step, option)}
            >
              {option.label}
              {selectedStepOption[step] === option.value && <i className="check icon"></i>}
            </Button>

            {/* Render dropdowns above option62 */}
            {isOption61Selected && option.value === "Belli bir zaman (üç hafta içinde)" && (
              <div className='step6-dropdown-container'>
                <Dropdown
                  text="Temmuz 24, 2024"
                  fluid
                  selection
                  options={günler}
                  className='dropdown-left'
                />
                <Dropdown
                  text='09:00'
                  fluid
                  selection
                  options={saatler}
                  className='dropdown-right'
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Step6;
