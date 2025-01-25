import {fireEvent, render, screen} from '@testing-library/react';
import {expect, vi} from 'vitest';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
    const mockhandleChange = vi.fn();
    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
    ];

    it('renders the dropdown with the correct label', () => {
        render(<Dropdown handleChange={mockhandleChange} options={options} label="Sort By"/>);
        expect(screen.getByLabelText('Sort By')).toBeInTheDocument();
    });

    it('renders all options correctly', () => {
        render(<Dropdown handleChange={mockhandleChange} options={options} label="Sort By"/>);
        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('calls handleChange with the correct value when an option is selected', () => {
        render(<Dropdown handleChange={mockhandleChange} options={options} label="Sort By"/>);
        fireEvent.change(screen.getByLabelText('Sort By'), {target: {value: 'option2'}});
        expect(mockhandleChange).toHaveBeenCalledWith('option2');
    });
    

    it('handles empty options array gracefully', () => {
        render(<Dropdown handleChange={mockhandleChange} options={[]} label="Sort By"/>);
        expect(screen.getByLabelText('Sort By').children.length).toBe(0);
    });
});