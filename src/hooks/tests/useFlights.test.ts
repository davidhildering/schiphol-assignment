import {renderHook, act, waitFor} from '@testing-library/react';
import useFlights from '../useFlights';
import {describe, beforeEach, it} from "vitest";

const mockFlights = [
    {
        "flightIdentifier": "D20190401KL0461",
        "flightNumber": "KL 461",
        "airport": "Tel Aviv",
        "date": "2022-02-23",
        "expectedTime": "21:05",
        "originalTime": "21:05",
        "url": "/en/departures/flight/D20190401KL0461/",
        "score": "450.7089"
    },
    {
        "flightIdentifier": "D20190401LY336",
        "flightNumber": "LY 336",
        "airport": "Tel Aviv",
        "date": "2022-02-23",
        "expectedTime": "21:30",
        "originalTime": "21:30",
        "url": "/en/departures/flight/D20190401LY336/",
        "score": "456.62738"
    },
];


describe('useFlights', () => {
    beforeEach(() => {
        localStorage.clear();

    });

    it('should initialize with empty flights and searchTerm from localStorage', () => {
        localStorage.setItem('searchTerm', 'test');
        const { result } = renderHook(() => useFlights());

        expect(result.current.flights).toEqual([]);
        expect(result.current.searchTerm).toBe('test');
    });

    it('should update searchTerm and save it to localStorage', () => {
        const { result } = renderHook(() => useFlights());

        act(() => {
            result.current.setSearchTerm('test2');
        });

        expect(result.current.searchTerm).toBe('test2');
        expect(localStorage.getItem('searchTerm')).toBe('test2');
    });

    it('should fetch sorted and filtered flights when searchTerm has 3 or more characters', async () => {
        const { result } = renderHook(() => useFlights());
        act(() => {
            result.current.setSearchTerm('tel');
        });
        await waitFor(() => {
        expect(result.current.getFilteredAndSortedFlights).toEqual(mockFlights);
        });
    });
});