/* App.jsx */
/* ------------- */
// @charset "UTF-8";
import React from 'react';
import { Button } from 'semantic-ui-react';
import "./App.css";
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  
  return (
    <>
    <div className='container'>
      <div className='modal'>
        <div className='header'>
          <h2 className='title'>Halı Yıkama</h2>
          <button className='close-button'> <i class="close icon"></i> </button>
        </div>
        
        <div className='price-range'>
          <p>Ortalama fiyat aralığı:</p>
          <p>350TL - 1.300TL</p>
        </div>
        <h3> Halı nerede yıkansın? </h3>
        <div className='options'>
          <Button className='option-button'>Adresten alınıp teslim edilsin</Button>
          <Button className='option-button'>Evde halı temizliği yapılsın</Button>
          <Button className='option-button'>Ofiste halı temizliği yapılsın</Button>
        </div>
        <Button className='continue-button'>DEVAM</Button>

        
        
      </div>
    </div>
    </>
  )
}

export default App