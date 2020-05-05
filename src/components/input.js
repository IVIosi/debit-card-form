import React, { useRef, forwardRef, useImperativeHandle } from 'react';

function Input(
  { name, isNumber, label, placeholder, value, onChange, onFocus },
  ref,
) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div className="field-input">
      <label className="field-input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="field-input__input"
        type={isNumber ? 'number' : 'text'}
        ref={inputRef}
        name={name}
        aria-label={label}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onFocus={() => onFocus(name)}
      />
    </div>
  );
}

export default forwardRef(Input);
