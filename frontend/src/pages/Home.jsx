import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Home.css"
import { NavLink } from "react-router-dom";
import tyreForCard from '../assets/tyreForCard.jpg'
import Battery from '../assets/Battery.jpg'
import brake from '../assets/brake.jpg'



import mechanic from '../assets/mechanic.jpg';
import carCrash from '../assets/carCrash.png';

const ImageCarousel = () => {
    const slides = [
      {
        image: carCrash,
        title: 'Technix',
        subtitle: 'Welcome to',
        description:
           "Welcome to Technix! We provide fast, reliable roadside car repair services by connecting you with skilled mechanics, anytime and anywhere. Get back on the road with ease, no matter where you are!",
        buttonText: 'Book Appointment',
        link: '/appointment',  // Navigation link for this slide
      },
      {
        image: mechanic,
        title: 'Technix',
        subtitle: 'Welcome to',
        description:
          'Welcome to Technix! We provide fast, reliable roadside car repair services by connecting you with skilled mechanics, anytime and anywhere. Get back on the road with ease, no matter where you are!',
        buttonText: 'Book Appointment',
        link: '/store',  // Navigation link for this slide
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000); // Automatically switch slides every 5 seconds
  
      return () => clearInterval(interval); // Clean up on unmount
    }, [slides.length]);
  
    const handlePrevClick = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };
  
    const handleNextClick = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    return (
      <div className="home-carousel">
        <div className="home-carousel-slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
          <div className="home-carousel-content">
            <h3>{slides[currentSlide].subtitle}</h3>
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
            <NavLink to={slides[currentSlide].link} className="home-carousel-btn">
              {slides[currentSlide].buttonText}
            </NavLink>
          </div>
        </div>
  
        <button className="home-carousel-control prev" onClick={handlePrevClick}>
          &#10094;
        </button>
        <button className="home-carousel-control next" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>
    );
  };




  const Services = () => {
    const services = [
      { name: "Tyre", image: tyreForCard, link:"https://www.amazon.in/Ceat-Fuelsmarrt-165-Tubeless-Tyre/dp/B06X191HK4/ref=sr_1_5?crid=17N1948PHIFNF&dib=eyJ2IjoiMSJ9.ds32gUM5aHRKtTqHg99J9xCTSj1J85gvd_QHLEWLIzHF4hmM9FOiFusDKAjhPv_d6vReuTOk1Odh_3h_zvIzlx_ZcLmoZaQEYgKs4TdBpxxG88MhmtHoFRf5B3RgGGabtthjOxJq1_8Jk0dT_N2K2rzzloRiYsV19iQxgpfCA7OZi_C6qpXOHxNI5k2g7KFhIWFz0mgXqqEUXvLxXKYYXeT-MD1zgtk81zy068vESEY.2vSS-cn8nCYppzBJ64c1o4aSiVQLRKe3yKnhIbUgP90&dib_tag=se&keywords=tyre&qid=1729221613&sprefix=tyre%2Caps%2C180&sr=8-5&th=1" },
      { name: "Battery", image: Battery, link:"https://www.amazon.in/Amaron-AAM-FL-565106590-DIN65-65-Ah/dp/B0865SWHW8/ref=sr_1_15?crid=1SVJAUB7LM330&dib=eyJ2IjoiMSJ9.lj2orrlNvR0VOczfIw1X9uwE_mkflLQQqfbyd4gB3ujq8gJoqdSssYUhw5_NOXj8wLWHUmQZC_QABeJu5ZCyfcDTHv0t3zNQp1VK8DLoidFsX6x8KrloQWacMnysrrQmxByR3VEZ7Pbxf4pyLFCxhQWCeKchENS0VhQ0bypskXuxMnNNVdluJ1s8CeCjMY2k-uYvppVwcW-vuMl0qD8mj3MU4113J9ifjfnwomSgDyY.sTS8tmj45b5WQjQgJnSfCArOw_2hGT8cHiJHvfvtwr0&dib_tag=se&keywords=battery+for+car&qid=1729221852&sprefix=battery+for+car%2Caps%2C180&sr=8-15" },
      { name: "Brake", image: brake, link:"https://www.amazon.in/Speedwav-Brake-Caliper-Cover-4PCS/dp/B07NGP8RTT/ref=sr_1_62?crid=36NNSIVET1HI&dib=eyJ2IjoiMSJ9.W-Ury2oyWNzpw0d4NgjwxPF2fczMlp3giSk3DJLVeUPdhuLukLoqhVHa6VpR--PR8GwOFdirreOIaFdXXEmgqOPoieE5dOG-OP5h_dC8SHXY9yJgZKnzIB21hQCpxwjGPyLdfhjljVRM1NPzAIcU-d2i_Q5-tUcHobPiR_QPTKc3ez7l7Ms07mcL4sty06Iy.QnqSBB7HrXQufwVeuHZ3TF_46HmbxTD55xRGFOif46w&dib_tag=se&keywords=brake+for+car&qid=1729221754&sprefix=brake+for+car%2Caps%2C179&sr=8-62" },
    ];
  
    return (
      <section id="services" className="services-section">
        <h2>Try Our Best Products on Amazon.in</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <a href={service.link} target="_blank" rel="noopener noreferrer">
                <button id="btn">Buy</button>
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  // VideoSection component
const VideoSection = () => {
    return (
      <section className="video-section">
        <div className="video-content">
          <h2 className="video-title">How to change your Car stepney</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/6BZ-6HbjD0w?si=4xZtf9kftHKzFRrd"
              title="Makeup Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };



function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');

  
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const navigate = useNavigate();

    const handleLogout = (e) => {
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      localStorage.removeItem('loggedInEmail');
      handleSuccess('User Logged out');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:3000/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            {/* <h1>Welcome {loggedInUser}</h1> */}
            {/* <button className='logoutbtn' onClick={handleLogout}>Logout</button> */}

            <ImageCarousel />
            <Services />
            <VideoSection />
            {/* <Testimonials /> */}

        

            <Footer></Footer>

            <ToastContainer />
        </div>
    )
}

export default Home