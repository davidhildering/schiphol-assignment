import {useMemo, useState} from 'react';
import {Flight} from '../types/flight';

type configSortProps = {
    key: string;
    direction: string;
};

const useTableSort = (flights: Flight[]) => {
    const [sortConfig, setSortConfig] = useState<configSortProps | null>({key: 'date', direction: 'earlyToLate'});

    // Set the sort configuration
    const handleSort = (direction: string) => {
        setSortConfig({key: 'date', direction});
    };

    // Sort the flights based on the sort configuration
    const sortedFlights = useMemo(() => {
        if (!sortConfig) return flights;
        const {direction} = sortConfig;
        // make a shallow copy from the array to avoid mutating the original array
        return [...flights].sort((a, b) => {
            const dateComparison = new Date(a.date).getTime() - new Date(b.date).getTime();
            if (dateComparison !== 0) {
                return direction === 'earlyToLate' ? dateComparison : -dateComparison;
            }
            const timeComparison = a.expectedTime.localeCompare(b.expectedTime);
            return direction === 'earlyToLate' ? timeComparison : -timeComparison;
        });
    }, [flights, sortConfig]);

    return {sortedFlights, handleSort};
};

export default useTableSort;