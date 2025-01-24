import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import FlightTable from './FlightTable';
import {Flight} from '../../types/flight';
import {headers} from '../../data/headers';

describe('FlightTable', () => {
    const mockFlights: Flight[] = [
        {
            "flightIdentifier": "D20190401KL0461",
            "flightNumber": "KL 461",
            "airport": "Tel Aviv",
            "date": "2022-02-23",
            "expectedTime": "21:05",
            "originalTime": "21:05",
            "url": "/en/departures/flight/D20190401KL0461/",
            "score": "255.66647"
        },
        {
            "flightIdentifier": "D20190401LY336",
            "flightNumber": "LY 336",
            "airport": "Tel Aviv",
            "date": "2022-02-23",
            "expectedTime": "21:30",
            "originalTime": "21:30",
            "url": "/en/departures/flight/D20190401LY336/",
            "score": "255.66647"
        },
    ];

    it('renders the flight table with correct headers', () => {
        render(<FlightTable flights={mockFlights}/>);
        headers.forEach(header => {
            expect(screen.getByText(header.label)).toBeInTheDocument();
        });
    });

    it('renders all flight rows correctly', () => {
        render(<FlightTable flights={mockFlights}/>);
        mockFlights.forEach(flight => {
            expect(screen.getByText(flight.flightNumber)).toBeInTheDocument();

        });
    });

    it('handles empty flights array gracefully', () => {
        render(<FlightTable flights={[]}/>);
        expect(screen.queryByText('KL 461')).not.toBeInTheDocument();
        expect(screen.queryByText('LY 336')).not.toBeInTheDocument();
    });
});