import React from 'react';
import './Dropdown.css';

interface DropdownProps {
    handleSort: (key: string) => void;
    options: { value: string; label: string }[];
    label: string;
    testId?: string;
}

const Dropdown: React.FC<DropdownProps> = ({handleSort, options, label, testId}) => {
    return (
        <div className="dropdown">
            <label htmlFor={label}>{label}</label>
            <select data-testid={testId} id={label} onChange={(e) => handleSort(e.target.value)}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;