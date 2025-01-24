import {fireEvent, render, screen} from '@testing-library/react';
import {expect, vi} from 'vitest';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
    const mockHandleSort = vi.fn();
    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
    ];

    it('renders the dropdown with the correct label', () => {
        render(<Dropdown handleSort={mockHandleSort} options={options} label="Sort By"/>);
        expect(screen.getByLabelText('Sort By')).toBeInTheDocument();
    });

    it('renders all options correctly', () => {
        render(<Dropdown handleSort={mockHandleSort} options={options} label="Sort By"/>);
        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('calls handleSort with the correct value when an option is selected', () => {
        render(<Dropdown handleSort={mockHandleSort} options={options} label="Sort By"/>);
        fireEvent.change(screen.getByLabelText('Sort By'), {target: {value: 'option2'}});
        expect(mockHandleSort).toHaveBeenCalledWith('option2');
    });
    

    it('handles empty options array gracefully', () => {
        render(<Dropdown handleSort={mockHandleSort} options={[]} label="Sort By"/>);
        expect(screen.getByLabelText('Sort By').children.length).toBe(0);
    });
});