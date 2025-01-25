import React from 'react';
import {Flight} from '../../types/flight';
import '../../style/colors.css';
import './FlightTable.css';
import {headers} from "../../data/headers";
import useTableSort from '../../hooks/useTableSort';
import Dropdown from "../dropdown/Dropdown.tsx";
import Table from "../table/Table.tsx";
import {renderFlightTableCell} from "../../utils/utils";


interface FlightTableProps {
    flights: Flight[];
}

const FlightTable: React.FC<FlightTableProps> = ({flights}) => {
    const {sortedFlights, handleSort} = useTableSort(flights);

    const filterOptions = [
        {value: 'earlyToLate', label: 'Earliest to latest'},
        {value: 'lateToEarly', label: 'Latest to earliest'}
    ];

    const goToUrl = (url: string) => {
        window.location.href = `https://schiphol.nl/${url}`;
    };

    return (
        <div className="flight-table-container">
            <Dropdown
                handleChange={handleSort}
                label="Sort by"
                testId={'dropdown-sort-by'}
                options={filterOptions}/>
            <Table headers={headers}
                   rowKey={(item) => item.flightIdentifier}
                   data={sortedFlights}
                   onRowClick={(item) => goToUrl(item.url)}
                   renderCell={renderFlightTableCell}/>
        </div>
    );
};

export default FlightTable;