import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './OfflineMap.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoidml2ZWtndXB0YTEwMzMiLCJhIjoiY20yMDJzbXdrMGJhdDJrcjJlYzN0YTNhdiJ9.9IfHEEBsauzfeLV5-wR60g'; // Replace with your Mapbox access token

const OfflineMap = () => {
  const [position, setPosition] = useState(null);
  const [garages, setGarages] = useState([]);
  const [selectedGarage, setSelectedGarage] = useState(null);

  // Sample garage data
  const garageData = [
    { id: 1, name: 'Auto Repair Shop A', lat: 37.7749, lng: -122.4194, address: '123 Main St, San Francisco, CA' },
    { id: 2, name: 'QuickFix Garage', lat: 37.7849, lng: -122.4094, address: '456 Market St, San Francisco, CA' },
    { id: 3, name: 'Pro Mechanics', lat: 37.7649, lng: -122.4294, address: '789 Lombard St, San Francisco, CA' },
  ];

  // Fetch user's last known location from localStorage or via Geolocation API
  useEffect(() => {
    const lastLocation = JSON.parse(localStorage.getItem('lastLocation'));

    if (lastLocation) {
      setPosition(lastLocation);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const currentLocation = [longitude, latitude]; // Mapbox uses [longitude, latitude]
          setPosition(currentLocation);
          localStorage.setItem('lastLocation', JSON.stringify(currentLocation));
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    }
  }, []);

  // Set garage data (this can later be replaced with an API call)
  useEffect(() => {
    if (position) {
      setGarages(garageData); // Use static garage data
    }
  }, [position]);

  if (!position || position.length < 2 || isNaN(position[0]) || isNaN(position[1])) {
    return <div>Location not available</div>;
  }

  return (
    <div className="offline-map-container">
      <Map
        initialViewState={{
          longitude: position[0],
          latitude: position[1],
          zoom: 13,
        }}
        style={{ width: '100%', height: '500px' }}
        mapStyle="mapbox://styles/mapbox/streets-v11" // Mapbox style URL
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {/* User's last known location marker */}
        <Marker longitude={position[0]} latitude={position[1]} color="red">
          <Popup anchor="top" closeButton={false}>
            <div>Your last known location</div>
          </Popup>
        </Marker>

        {/* Display nearby garages */}
        {garages.map((garage) => (
          <Marker
            key={garage.id}
            longitude={garage.lng}
            latitude={garage.lat}
            onClick={() => setSelectedGarage(garage)}
            color="blue"
          >
            {selectedGarage && selectedGarage.id === garage.id && (
              <Popup
                longitude={garage.lng}
                latitude={garage.lat}
                onClose={() => setSelectedGarage(null)}
              >
                <div>
                  <strong>{garage.name}</strong><br />
                  {garage.address}
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default OfflineMap;
