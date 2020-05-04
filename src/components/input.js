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
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={isNumber && 'number'}
        ref={inputRef}
        name={name}
        aria-label={label}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onFocus={() => onFocus(name)}
      />
    </>
  );
}

export default forwardRef(Input);
