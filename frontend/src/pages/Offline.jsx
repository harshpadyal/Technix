import React, { useEffect } from 'react';
import './Offline.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoidml2ZWtndXB0YTEwMzMiLCJhIjoiY20yMDJzbXdrMGJhdDJrcjJlYzN0YTNhdiJ9.9IfHEEBsauzfeLV5-wR60g'; // Use your Mapbox token

const Offline = () => {
    const garages = [
        {
            name: 'Sai Service Garage',
            address: 'Shop No. 15, Chembur Camp, Mumbai, Maharashtra 400074',
            phone: '02225288811',
            openUntil: '08:00 PM',
            lat: 19.061875,
            lng: 72.896576
        },
        {
            name: 'Bafna Motors Garage',
            address: 'V N Purav Marg, Chembur East, Mumbai, Maharashtra 400071',
            phone: '02225228855',
            openUntil: '07:30 PM',
            lat: 19.066813,
            lng: 72.899838
        },
        {
            name: 'Chembur Auto Garage',
            address: 'Shivaji Nagar, Chembur East, Mumbai, Maharashtra 400043',
            phone: '02225291112',
            openUntil: '09:00 PM',
            lat: 19.063428,
            lng: 72.901838
        },
        {
            name: 'Pawar Garage',
            address: 'Chembur Naka, Mumbai, Maharashtra 400071',
            phone: '02225298877',
            openUntil: '08:30 PM',
            lat: 19.064784,
            lng: 72.899337
        },
        {
            name: 'Ratan Garage',
            address: '13th Road, Chembur, Mumbai, Maharashtra 400071',
            phone: '02225291113',
            openUntil: '08:00 PM',
            lat: 19.064790,
            lng: 72.896672
        }
    ];

    const vesit = {
        name: 'VESIT College',
        lat: 19.062898,
        lng: 72.897364
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('loggedInEmail');
        navigate('/home');
    };

    useEffect(() => {
        // Initialize the map
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [72.897364, 19.062898], // Initial center [lng, lat]
            zoom: 14 // Initial zoom level
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl());

        // Add markers for each garage
        garages.forEach((garage) => {
            // Create a DOM element for the marker
            const el = document.createElement('div');
            el.className = 'marker';

            // Set marker's red color using CSS (you can use your custom marker image here)
            el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
            el.style.width = '30px';
            el.style.height = '30px';
            el.style.backgroundSize = '100%';

            // Add marker to the map
            const marker = new mapboxgl.Marker(el)
                .setLngLat([garage.lng, garage.lat])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // Add popups
                        .setHTML(
                            `<h3>${garage.name}</h3><p>${garage.address}</p><p>📞 ${garage.phone}</p><p>🕒 Open until ${garage.openUntil}</p>`
                        )
                )
                .addTo(map);
        });

        // Add VESIT marker with custom red marker image
        const vesitMarker = document.createElement('div');
        vesitMarker.className = 'vesit-marker';
        vesitMarker.style.backgroundImage = 'url(.\images\red marker 3.png)'; // Use your local image file path
        vesitMarker.style.width = '40px';
        vesitMarker.style.height = '40px';
        vesitMarker.style.backgroundSize = '100%';

        // Add the VESIT marker to the map
        new mapboxgl.Marker(vesitMarker)
            .setLngLat([vesit.lng, vesit.lat])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // Add popup for VESIT
                    .setHTML(`<h3>${vesit.name}</h3>`)
            )
            .addTo(map);

    }, []);

    return (
        <main>
            <Navbar handleLogout={handleLogout} />
            <h1>Garages near VESIT</h1>
            <div className="outlet-container">
                <div className="garage-list">
                    {garages.map((garage, index) => (
                        <div key={index} className="store-card">
                            <div className="store-header">
                                <h3>🔧 {garage.name}</h3>
                            </div>
                            <div className="store-info">
                                <p>📍 {garage.address}</p>
                                <p>📞 {garage.phone}</p>
                                <p>🕒 Open until {garage.openUntil}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="outletmap">
                    <div id="map" style={{ width: '100%', height: '450px' }}></div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Offline;
