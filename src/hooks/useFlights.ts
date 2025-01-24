import {useEffect, useState} from "react";
import {Flight, FlightData} from "../types/flight.ts";

const useFlights = () => {
    const [flights, setFlights] = useState<Flight[]>([])
    const [searchTerm, setSearchTerm] = useState(() => {
        return localStorage.getItem('searchTerm') || '';
    });

    // save searchTerm to localStorage to remember the search term after a page refresh
    useEffect(() => {
        localStorage.setItem('searchTerm', searchTerm);
    }, [searchTerm]);

    // if searchTerm has 3 or more characters and flights is empty, fetch flights
    useEffect(() => {
        if (searchTerm.length >= 3 && flights.length === 0) {
            fetchFlights()
        }
    }, [searchTerm, flights])


    // fetch flights from the server
    const fetchFlights = async (): Promise<void> => {
        try {
            const response = await fetch('/flights')
            const data: FlightData = await response.json()
            setFlights(data.flights)
        } catch (error) {
            console.error('Error fetching flights:', error)
        }
    }

    // filter and sort flights based on the search term
    const filteredAndSortedFlights = (flights: Flight[], searchTerm: string) => {
        return flights
            .filter((flight) =>
                flight.airport.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    // only return the first 5 flights that match the search term
    const getFilteredAndSortedFlights = filteredAndSortedFlights(flights, searchTerm).slice(0, 5)

    return {searchTerm, setSearchTerm, flights, getFilteredAndSortedFlights}
}

export default useFlights;