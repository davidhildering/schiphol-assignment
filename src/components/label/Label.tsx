import React from 'react';
import './Label.css';

interface LabelProps {
    htmlFor: string;
    text: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
    return (
        <label className="label" htmlFor={htmlFor}>
            {text}
        </label>
    );
};

export default Label;