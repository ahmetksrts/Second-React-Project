// CloseModal.jsx
import React from 'react';
import { Button } from 'semantic-ui-react';
import "./CloseModal.css";

const CloseModal = ({ onClose }) => {
  const handleYesClick = () => {
    window.location.href = "https://armut.com/";
  };

  return (
    <div className="close-modal-overlay">
      <div className="close-modal">
        <h3 className='close-modal-header'>Emin misin?</h3>
        <p className='close-modal-p'>Birkaç soruya daha cevap vererek ücretsiz <br/>teklif alabilirsin.</p>
        <div className="close-modal-buttons">
          <Button onClick={onClose}>Devam et</Button>
          <Button onClick={handleYesClick} id='ÇIK'>ÇIK</Button>
        </div>
      </div>
    </div>
  );
};

export default CloseModal;
