import React from 'react';
import './Input.css';

interface InputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ searchTerm, setSearchTerm, label, placeholder }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
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