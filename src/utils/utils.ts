import {Flight} from "../types/flight.ts";
import {format} from "date-fns";

export const renderFlightTableCell = (item: Flight, key: string) => {
    if (key === 'date') {
        return format(new Date(item.date), 'dd MMM yyyy');
    }
    return item[key];
};