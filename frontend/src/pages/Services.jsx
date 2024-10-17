import React, { useState } from 'react';
import "./Services.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    const carouselItems = [
        {
            src: '/images/profile4.png',
            name: 'Abhay Gupta',
            feedback: 'Very useful'
        },
        {
            src: '/images/profile4.png',
            name: 'Harsh Padyal',
            feedback: 'Trusted app...'
        },
        {
            src: '/images/profile4.png',
            name: 'Vivek Gupta',
            feedback: 'Used this app in my vacations due to emergency and it was very beneficial.'
        }
    ];

    // Updated handleCardClick to accept a service name
    const handleCardClick = (service) => {
        navigate('/appointment', { state: { selectedService: service } });
    };

    // Define the services and their prices in Rupees
    const servicesWithPrices = [
        { name: 'Basic Car Service', imgSrc: '/images/car_service.png', price: '₹ 4,000' },
        { name: 'Car Inspection', imgSrc: '/images/Car-Inspection.png', price: '₹ 2,500' },
        { name: 'Used Car Inspection', imgSrc: '/images/used_car_inspection.jpg', price: '₹ 3,000' },
        { name: 'Car Wash', imgSrc: '/images/car_wash.png', price: '₹ 800' },
        { name: 'AC Repair', imgSrc: '/images/ac_repair.png', price: '₹ 6,500' },
        { name: 'Windshields & Lights', imgSrc: '/images/windshields.png', price: '₹ 5,000' },
    ];

    return (
        <>
            <Navbar />
            <div>
                <div className="svgimg">
                    <img src='/images/tyre.png' alt="tyre" />
                    <button onClick={() => handleCardClick('Basic Car Service')}>BOOK</button>
                </div>

                <div className="ourservices">
                    <div className="border"></div>
                    OUR SERVICES
                    <div className="border"></div>
                </div>

                <div className="box">
                    {servicesWithPrices.map((service, index) => (
                        <div key={index} className="card-container" onClick={() => handleCardClick(service.name)}>
                            <div className="card">
                                <img className="img" src={service.imgSrc} alt={service.name} />
                                <div className="card-title"><b>{service.name}</b></div>
                                <div className="card-price">{service.price}</div> {/* Price added here */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="feedbacks">
                    <div className="border"></div>
                    FEEDBACKS
                    <div className="border"></div>
                </div>

                <div className="carousel">
                    <div className="carousel-slide">
                        {carouselItems.map((item, index) => (
                            <div className="carousel-item" key={index}>
                                <img src={item.src} alt={`Image ${index + 1}`} />
                                <div className="carousel-text">
                                    <h2>{item.name}</h2>
                                    <p>{item.feedback}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="prev">❮</button>
                    <button className="next">❯</button>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Services;
