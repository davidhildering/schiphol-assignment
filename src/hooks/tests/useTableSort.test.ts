import {act, renderHook} from '@testing-library/react';
import useTableSort from '../useTableSort';
import {describe, expect, it} from 'vitest';
import {Flight} from '../../types/flight';

const mockFlights: Flight[] = [
    {
        flightIdentifier: '1',
        date: '2023-01-01',
        expectedTime: '10:00',
        flightNumber: '',
        airport: '',
        originalTime: '',
        url: '',
        score: ''
    },
    {
        flightIdentifier: '2',
        date: '2023-01-02',
        expectedTime: '09:00',
        flightNumber: '',
        airport: '',
        originalTime: '',
        url: '',
        score: ''
    },
    {
        flightIdentifier: '3',
        date: '2023-01-01',
        expectedTime: '08:00',
        flightNumber: '',
        airport: '',
        originalTime: '',
        url: '',
        score: ''
    },
];

describe('useTableSort', () => {
    it('should sort flights from early to late by default', () => {
        const {result} = renderHook(() => useTableSort(mockFlights));

        expect(result.current.sortedFlights).toEqual([
            {
                flightIdentifier: '3',
                date: '2023-01-01',
                expectedTime: '08:00',
                flightNumber: '',
                airport: '',
                originalTime: '',
                url: '',
                score: ''
            },
            {
                flightIdentifier: '1',
                date: '2023-01-01',
                expectedTime: '10:00',
                flightNumber: '',
                airport: '',
                originalTime: '',
                url: '',
                score: ''
            },
            {
                flightIdentifier: '2',
                date: '2023-01-02',
                expectedTime: '09:00',
                flightNumber: '',
                airport: '',
                originalTime: '',
                url: '',
                score: ''
            },
        ]);
    });

    it('should sort flights from late to early when direction is changed', () => {
        const {result} = renderHook(() => useTableSort(mockFlights));

        act(() => {
            result.current.handleSort('lateToEarly');
        });

        expect(result.current.sortedFlights).toEqual([
            {
                flightIdentifier: '2',
                date: '2023-01-02',
                expectedTime: '09:00',
                flightNumber: '',
                airport: '',
                originalTime: '',
                url: '',
                score: ''
            },
            {
                flightIdentifier: '1',
                date: '2023-01-01',
                expectedTime: '10:00',
                flightNumber: '',
                airport: '',
                originalTime: '',
                url: '',
                score: ''
            },
            {
                flightIdentifier: '3',
                date: '2023-01-01',
                expectedTime: '08:00',
                flightNumber: '',
                airport: '',
                originalTime: '',
                url: '',
                score: ''
            },
        ]);
    });
});