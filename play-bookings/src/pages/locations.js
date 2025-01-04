import { useState, useEffect } from 'react';

export default function Locations() {
const [locations, setLocations] = useState([]);

useEffect(() => {
    // Placeholder for fetching data from the database
    // This will be replaced with an actual API call
    const fetchLocations = async () => {
        // Simulated data
        const data = [
            { id: 1, name: 'Memorial Park court', city: 'Santa Monica'},
            { id: 2, name: 'Crossroads Norton gym', city: 'Santa Monica'}
        ];
        setLocations(data);
    };

    fetchLocations();
}, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Locations</h1>
            <p>Find a basketball court.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.map((location) => (
                    <div key={location.id} className="p-4 border rounded-md shadow-md">
                        <h2 className="text-xl font-semibold">{location.name}</h2>
                        <p className="text-gray-600">{location.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}