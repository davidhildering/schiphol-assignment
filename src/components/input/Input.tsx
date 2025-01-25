import React from 'react';
import './Input.css';
import Label from '../label/Label';

interface InputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ searchTerm, setSearchTerm, label, placeholder }) => {
  return (
    <div className="input-container">
      {label && <Label htmlFor={`input-field-${label}`} text={label} />}
      <input
        id={`input-field-${label}`}
        className="input-field"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length < 3 && <small>Enter at least 3 characters</small>}
    </div>
  );
};

export default Input;