// Step5.jsx
import React from 'react';
import options from '../assets/options.json';
import { Dropdown } from 'semantic-ui-react';


const Step5 = () => {
  const stepContent = options.step5;

  const iller = [
    { text: 'İstanbul', value: '34', },
    { text: 'Ankara', value: '06', },
    { text: 'İzmir', value: '35', }
  ]

  const ilçeler1 = [
    { key: 'kadıköy', text: 'Kadıköy', },
    { key: 'üsküdar', text: 'Üsküdar', },
    { key: 'ümraniye', text: 'Ümraniye', }
  ]

  return (
    <>
      <h3>{stepContent[0].title}</h3>
      <Dropdown placeholder='İl' fluid selection options={iller} />
      {/* TODO: if istanbul is selected, display the below dropdown list */}
      {/* <Dropdown placeholder='İlçe' fluid selection options={ilçeler1} /> */}

    </>
  );
};

export default Step5;
