import {renderFlightTableCell} from './utils';
import {describe, expect, it} from 'vitest';

describe('renderFlightTableCell', () => {
    const mockFlight = {
        flightIdentifier: "D20190401KL0461",
        flightNumber: "KL 461",
        airport: "Tel Aviv",
        date: "2022-02-23",
        expectedTime: "21:05",
        originalTime: "21:05",
        url: "/en/departures/flight/D20190401KL0461/",
        score: "450.7089"
    };

    it('should format the date correctly', () => {
        const result = renderFlightTableCell(mockFlight, 'date');
        expect(result).toBe('23 Feb 2022');
    });

    it('should return the flight number', () => {
        const result = renderFlightTableCell(mockFlight, 'flightNumber');
        expect(result).toBe('KL 461');
    });

    it('should return the airport', () => {
        const result = renderFlightTableCell(mockFlight, 'airport');
        expect(result).toBe('Tel Aviv');
    });

    it('should return the original time', () => {
        const result = renderFlightTableCell(mockFlight, 'originalTime');
        expect(result).toBe('21:05');
    });

    it('should return the URL', () => {
        const result = renderFlightTableCell(mockFlight, 'url');
        expect(result).toBe('/en/departures/flight/D20190401KL0461/');
    });

    it('should return undefined for an unknown key', () => {
        const result = renderFlightTableCell(mockFlight, 'unknownKey');
        expect(result).toBeUndefined();
    });
});