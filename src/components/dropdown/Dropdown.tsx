import React from 'react';
import './Dropdown.css';
import Label from "../label/Label.tsx";

interface DropdownProps {
    handleChange: (key: string) => void;
    options: { value: string; label: string }[];
    label: string;
    testId?: string;
}

const Dropdown: React.FC<DropdownProps> = ({handleChange, options, label, testId}) => {
    return (
        <div className="dropdown">
            <Label htmlFor={label} text={label} />
            <select data-testid={testId} id={label} onChange={(e) => handleChange(e.target.value)}>
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