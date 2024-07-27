// Step10.jsx
// @charset "UTF-8";
/* -------------------------- */

import React from 'react';
import { Button } from 'semantic-ui-react';
import options from '../assets/options.json';
import "./Step10.css";

const Step10 = () => {
  const stepContent = {
    title: options.final[0].title,
    p: options.final[1].p
  };

  // Retrieve the OPTIONS array from local storage
  const optionsArray = JSON.parse(localStorage.getItem('OPTIONS')) || [];
  
  // Get the first and second options from the array
  const firstOption = optionsArray[0] || 'N/A';
  const secondOption = optionsArray[1] || 'N/A';
  const thirdOption = optionsArray[2] || 'N/A';
  const fourthOption = optionsArray[3] || 'N/A';
  const fifthOption = optionsArray[4] || 'N/A';
  const sixthOption = optionsArray[5] || 'N/A';
  const seventhOption = optionsArray[6] || 'N/A';
  const eighthOption = optionsArray[7] || 'N/A';
  const ninthOption = optionsArray[8] || 'N/A';







  
  // Format the display for both options
  const formatOption = (option) => 
    typeof option === 'object'
      ? Object.entries(option).map(([key, value]) => `"${value}"`).join(" , ")
      : option;

  const formatOption2 = (option) => 
    typeof option === 'object'
      ? Object.entries(option).map(([key, value]) => `"${value}"`)
      : option;
      

  const formatOption5 = (option) => 
    typeof option === 'object'
      ? Object.entries(option).map(([key, value]) => `${key}: "${value}"`).join(", ")
      : option;

  const formattedFirstOption = formatOption(firstOption);
  const formattedSecondOption = formatOption(secondOption);
  const formattedThirdOption = formatOption(thirdOption);
  const formattedFourthOption = formatOption2(fourthOption);
  const formattedFifthOption = formatOption5(fifthOption);
  const formattedSixthOption = formatOption(sixthOption);
  const formattedSeventhOption = formatOption5(seventhOption);
  const formattedEighththOption = formatOption5(eighthOption);
  const formattedNinthOption = formatOption5(ninthOption);








  return (
    <>
    
      <h3>{stepContent.title}</h3>
      
      <p className='option-p'>{stepContent.p}</p>
      <div className='step10-content'>
      <p className='option-display'>Step 1: <br/>{formattedFirstOption}</p>
      <p className='option-display'>Step 2: <br/>{formattedSecondOption}</p>
      <p className='option-display'>Step 3: <br/>{formattedThirdOption}</p>
      <p className='option-display'>Step 4: <br/>{formattedFourthOption}</p>
      <p className='option-display'>Step 5: <br/>{formattedFifthOption}</p>
      <p className='option-display'>Step 6: <br/>{formattedSixthOption}</p>
      <p className='option-display'>Step 7: <br/>{formattedSeventhOption}</p>
      <p className='option-display'>Step 8: <br/>{formattedEighththOption}</p>
      <p className='option-display'>Step 9: <br/>{formattedNinthOption}</p>


      </div>


    </>
  );
};

export default Step10;
