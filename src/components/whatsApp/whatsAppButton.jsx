import React from 'react';

import 'react-whatsapp-widget/dist/index.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
const WhatsAppButton = () => {
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999' }}>
      {/* Puedes cambiar los valores de phoneNumber y message */}
      <WhatsAppWidget phoneNumber="5493825458454" message="¡Hola! En qué podemos ayudarte?">
        <img src='/public/whatsapp.png' alt="Icono de WhatsApp" />
      </WhatsAppWidget>
    </div>
  );
};

export default WhatsAppButton;
