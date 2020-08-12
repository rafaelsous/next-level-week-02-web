import React, { InputHTMLAttributes, ReactNode } from 'react';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: ReactNode;
  type: string;
}

const Input = ({ name, label, icon, type, ...rest }: Props) => {
  return (
    <div className="input-block">
      { label && <label htmlFor={name}>{label}</label> }
      <input id={name} {...{ type }} {...rest} />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
}

export default Input;