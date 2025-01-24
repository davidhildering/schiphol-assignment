import './style/app.css';
import useFlights from './hooks/useFlights';
import Input from './components/input/Input';
import FlightTable from './components/flightTable/FlightTable';
import Layout from "./components/layout/Layout.tsx";
import Header from './components/header/Header.tsx';

function App() {
    const { searchTerm, setSearchTerm, getFilteredAndSortedFlights } = useFlights();

    const renderFlightTable = () => {
        if (searchTerm.length >= 3) {
            return getFilteredAndSortedFlights.length > 0 ? (
                <FlightTable flights={getFilteredAndSortedFlights} />
            ) : (
                <p>No flights found</p>
            );
        }
        return null;
    };

    return (
        <Layout>
            <Header title="Schiphol flight information" />
            <Input
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                label='Search flights'
                placeholder="Flight destination..."
            />
            {renderFlightTable()}
        </Layout>
    );
}

export default App;