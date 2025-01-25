import {useMemo, useState} from 'react';
import {Flight} from '../types/flight';


const useTableSort = (flights: Flight[]) => {
    const [sortDirection, setSortDirection] = useState<string | null>('earlyToLate');

    // Set the sort direction
    const handleSort = (direction: string) => {
        setSortDirection(direction);
    };

    // Sort the flights based on the sort configuration
    const sortedFlights = useMemo(() => {
        if (!sortDirection) return flights;
        // create a shallow copy of the flights array to avoid mutating the original array
        return [...flights].sort((a, b) => {
            const dateComparison = new Date(a.date).getTime() - new Date(b.date).getTime();
            if (dateComparison !== 0) {
                return sortDirection === 'earlyToLate' ? dateComparison : -dateComparison;
            }
            const timeComparison = a.expectedTime.localeCompare(b.expectedTime);
            return sortDirection === 'earlyToLate' ? timeComparison : -timeComparison;
        });
    }, [flights, sortDirection]);

    return {sortedFlights, handleSort};
};

export default useTableSort;