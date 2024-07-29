// Step10.jsx
// @charset "UTF-8";
/* -------------------------- */

import React from 'react';
import { Button } from 'semantic-ui-react';
import options from '../assets/options.json';
import "./Step10.css";

const Step10 = ( {} ) => {
  const stepContent = {
    title: options.final[0].title,
    p: options.final[1].p,

    step1h: options.step1[0].title,
    step2h: options.step2['Adresten alınıp teslim edilsin'][0].title,
    step3h: options.step3[0].title,
    step4h: options.step4[0].title,
    step5h: options.step5[0].title,
    step6h: options.step6[0].title,
    step7h: options.step7[0].title,
    step8h: options.step8[0].title,
    step9h: options.step9[0].title
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
      <p className='option-display'>{stepContent.step1h}: <br/>{formattedFirstOption}</p>
      <p className='option-display'>{stepContent.step2h}: <br/>{formattedSecondOption}</p>
      <p className='option-display'>{stepContent.step3h}: <br/>{formattedThirdOption}</p>
      <p className='option-display'>{stepContent.step4h}: <br/>{formattedFourthOption}</p>
      <p className='option-display'>{stepContent.step5h}: <br/>{formattedFifthOption}</p>
      <p className='option-display'>{stepContent.step6h}: <br/>{formattedSixthOption}</p>
      <p className='option-display'>{stepContent.step7h}: <br/>{formattedSeventhOption}</p>
      <p className='option-display'>{stepContent.step8h}: <br/>{formattedEighththOption}</p>
      <p className='option-display'>{stepContent.step9h}: <br/>{formattedNinthOption}</p>


      </div>


    </>
  );
};

export default Step10;
