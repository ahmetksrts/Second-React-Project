// Step6.jsx
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

  const saatler = [
    { key: '9', text: '09:00', value: '9' },
    { key: '10', text: '10:00', value: '10' },
    { key: '11', text: '11:00', value: '11' }
  ];

  const isOption61Selected = selectedStepOption[step] === "Belli bir zaman (üç hafta içinde)";

  // Function to format date as "Temmuz 24, 2024"
  const formatDate = (date) => {
    const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}, ${year}`;
  };

  // Function to get the current date and future 5 days
  function getFutureDates() {
    const futureDates = [];
    const currentDate = new Date();
    
    // Format current date for the placeholder
    const currentDateFormatted = formatDate(currentDate);

    // Generate dates for the next 5 days
    for (let i = 0; i < 21; i++) {
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + i);
      
      futureDates.push({
        key: `date${i}`,
        text: formatDate(futureDate),
        value: formatDate(futureDate)
      });
    }

    return { futureDates, currentDateFormatted };
  }

  const { futureDates, currentDateFormatted } = getFutureDates(); // Get future dates and current date

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
                  placeholder={currentDateFormatted} // Use current date as placeholder
                  fluid
                  selection
                  options={futureDates} // Use future dates here
                  className='dropdown-left'
                />
                <Dropdown
                  placeholder='09:00'
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
