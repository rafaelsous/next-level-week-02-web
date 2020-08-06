import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = ({ name, label, ...rest }: Props) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" {...rest} />
    </div>
  );
}

export default Input;