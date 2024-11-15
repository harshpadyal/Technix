import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  
  useEffect(() => {
    // Load appointments from localStorage
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  const handleCancelAppointment = (id) => {
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    toast.success('Appointment cancelled successfully!');
  };

  const handleFeedback = (id) => {
    // Redirect to the Feedback page and pass the appointment ID as a state
    navigate(`/feedback`, { state: { appointmentId: id } });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', backgroundColor: '#fce4ec' }}>
        <h2 style={{ color: '#57111B', textAlign: 'center' }}>My Appointments</h2>
        
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            style={{
              backgroundColor: '#e91e63',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Appointments
          </button>
        </div>

        <div>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '10px',
                  margin: '10px 0',
                  backgroundColor: '#fff',
                }}
              >
                <h4 style={{ color: '#57111B' }}>{appointment.vehicle}</h4>
                <p style={{ color: '#57111B' }}>Date: {new Date(appointment.date).toLocaleString()}</p>
                <p style={{ color: '#57111B' }}>Location: {appointment.location}</p>
                <p style={{ color: '#57111B' }}>Notes: {appointment.notes}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleCancelAppointment(appointment.id)}
                    style={{
                      backgroundColor: '#57111B',
                      color: '#fff',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel Appointment
                  </button>
                  <button
                    onClick={() => handleFeedback(appointment.id)}
                    style={{
                      backgroundColor: '#4caf50',
                      color: '#fff',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Feedback
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: '#57111B', textAlign: 'center' }}>No appointments to display.</p>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MyAppointments;
