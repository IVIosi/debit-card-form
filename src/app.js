import React, { useState, useRef } from 'react';

import Input from './components/input';
import SubmitButton from './components/submit-button';
import CardView from './components/card-view';

export default function App(params) {
  const [card, setCard] = useState({
    number: '5022676712345678',
    holderName: 'john doe',
    expirationMonth: '12',
    expirationYear: '21',
  });
  const [focusedField, setFocusedField] = useState('');
  const isFieldValueValid = (value, fieldName) => {
    switch (fieldName) {
      case 'number':
        if (value.length > 16) {
          return false;
        }
        return true;
      case 'expirationMonth':
        if (value.length > 2) {
          return false;
        }
        return true;
      case 'expirationYear':
        if (value.length > 2) {
          return false;
        }
        return true;
      default:
        return true;
    }
  };
  const handleCardInfoChange = (e, fieldName) => {
    if (isFieldValueValid(e.target.value, fieldName)) {
      setCard({ ...card, [fieldName]: e.target.value });
    }
  };

  const fieldRefs = {};
  Object.keys(card).map((field) => {
    fieldRefs[field] = useRef(null);
  });

  const handleFocus = (fieldName) => {
    fieldRefs[fieldName].current.focus();
  };

  return (
    <div>
      <CardView
        cardInfo={card}
        focusOnInput={handleFocus}
        focusedField={focusedField}
      />
      <div className="card-form">
        {Object.keys(card).map((fieldName) => {
          return (
            <Input
              key={fieldName}
              name={fieldName}
              label={fieldName}
              isNumber={fieldName !== 'holderName'}
              ref={fieldRefs[fieldName]}
              onChange={(e) => handleCardInfoChange(e, fieldName)}
              value={card[fieldName]}
              onFocus={setFocusedField}
            />
          );
        })}
        <SubmitButton text="Submit" onClick={() => {console.log(card)}}/>
      </div>
    </div>
  );
}
