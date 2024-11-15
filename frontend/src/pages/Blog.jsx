import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Importance of Regular Car Servicing',
    content: `
      Regular car servicing is essential for maintaining the performance and safety of your vehicle. 
      It helps identify potential issues before they become serious problems, ensuring your car runs smoothly. 
      A well-maintained car not only enhances your driving experience but also retains its value over time.
    `,
    image:'./', 
  },
  {
    id: 2,
    title: 'Top 5 Car Maintenance Tips',
    content: `
      1. Check Your Oil Regularly: Ensure your engine oil is at the proper level and change it according to your manufacturer’s recommendations.
      2. Inspect Your Tires: Check tire pressure and tread depth to ensure safety and fuel efficiency.
      3. Replace Air Filters: A clean air filter improves engine performance and fuel efficiency.
      4. Monitor Brake Performance: Regularly check your brakes to ensure they are working effectively.
      5. Keep It Clean: Regular washing and waxing protect your car's paint and finish.
    `,
    image  : 'https://example.com/car-maintenance-tips.jpg', 
  },
  {
    id: 3,
    title: 'How to Choose the Right Mechanic',
    content: `
      Choosing the right mechanic is crucial for your vehicle's health. Look for certified professionals with good reviews. 
      Ask for recommendations from friends or family and ensure they specialize in your car's make and model. 
      A trustworthy mechanic will provide clear explanations and reasonable estimates before proceeding with any work.
    `,
    image: 'https://example.com/choose-mechanic.jpg', 
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', backgroundColor: '#fce4ec' }}>
        <h2 style={{ color: '#57111B', textAlign: 'center' }}>Car Servicing Blog</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {blogPosts.map((post) => (
            <div key={post.id} style={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '8px', padding: '15px' }}>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
                />
              )}
              <h3 style={{ color: '#57111B' }}>{post.title}</h3>
              <p style={{ color: '#333' }}>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Blog;
