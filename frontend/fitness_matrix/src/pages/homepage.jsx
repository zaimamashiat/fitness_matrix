import React from 'react';
import Banner from '../components/banner';
import Homecard from '../components/homecard';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Trackercard from '../components/trackercard';
import FoodCalculator from '../components/foodcal';

function HomePage() {
  const cardsData = [
    {
      title: "Manage your meals",
      image: "https://plus.unsplash.com/premium_photo-1664640733984-cbee33873783?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Master your nutrition with precise meal prep strategies. Track calories, macros, and portion sizes to fuel your body effectively and achieve your fitness goals.",
    },
    {
      title: "Power Up Your Workout",
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Elevate your fitness routine with effective workout plans tailored to your goals. From strength training to cardio, explore routines that keep you motivated and build strength, endurance, and flexibility.",
    },
    {
      title: "Yoga & Mindfulness",
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Reconnect with yourself through yoga and mindfulness practices. Improve your flexibility, focus, and inner peace with routines designed to reduce stress and enhance mental clarity.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Banner />
      
      
      
      {/* Container for the Homecards */}
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {/* Map through the data and create a Homecard for each */}
        {cardsData.map((card, index) => (
          <Homecard 
            key={index} 
            title={card.title} 
            image={card.image} 
            description={card.description} 
          />
        ))}
      </div>
      
      <Trackercard />
      <Footer />
      <FoodCalculator/>
    </div>
  );
}

export default HomePage;
