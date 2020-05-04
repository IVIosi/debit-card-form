import React, { useState } from 'react';

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
  const handleCardInfoChange = (e, fieldName) => {
    setCard({ ...card, [fieldName]: e.target.value });
  };

  return (
    <div>
      <CardView
        cardInfo={card}
      />
      {Object.keys(card).map((fieldName) => {
        return (
          <Input
            key={fieldName}
            name={fieldName}
            onChange={(e) => handleCardInfoChange(e, fieldName)}
            value={card[fieldName]}
            onFocus={setFocusedField}
          />
        );
      })}
      <SubmitButton />
    </div>
  );
}
