import React from 'react';

export default function SubmitButton({ text, onClick }) {
  return (
    <button className="submit-button" onClick={onClick}>
      {text}
    </button>
  );
}

SubmitButton.defaultProps = {
  text: 'Submit',
};
