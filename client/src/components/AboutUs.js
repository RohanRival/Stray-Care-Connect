import React from 'react';
import Navbar from './Navbar';
const AboutUs = () => {
  return (
    
    <div style={styles.pageContainer}>
    <Navbar/>
      <h1 style={styles.heading1}>Welcome to StrayCareConnect</h1>
      <p style={styles.description1}>WHERE COMPASSION MEETS ACTION TO MAKE A DIFFERENCE IN THE LIVES OF STREET ANIMALS, STARTING WITH OUR BELOVED FOUR-LEGGED FRIENDS, THE STREET DOGS. OUR JOURNEY BEGAN WITH A SIMPLE YET POWERFUL IDEA: TO CREATE A WORLD WHERE EVERY STREET DOG AND STREET ANIMAL CAN LIVE A LIFE FREE FROM SUFFERING AND NEGLECT.</p>
        <h1 style={styles.heading}>OUR MISSION</h1>
      <p style={styles.description}>At StrayCareConnect, our mission is to provide a voice to those who cannot speak for themselves. Street dogs and street animals endure countless hardships, from hunger and disease to cruelty and abandonment. We believe that every life matters, regardless of species, and we are committed to improving the welfare of these vulnerable beings.</p>
      <h1 style={styles.heading}>OUR VISION</h1>
      <p style={styles.description}>Our vision is a world where street dogs and street animals are not seen as problems but as part of the community. We envision safe and caring environments for these animals, where they can thrive alongside humans in harmony. Through our efforts, we aim to raise awareness about the issues faced by street animals and inspire change at both individual and societal levels.</p>
      <h1 style={styles.heading}>WHAT WE DO</h1>
      <p style={styles.description}>-- Rescue and Rehabilitation: We rescue street dogs and animals from dire situations, providing them with medical care, shelter, and love. Our dedicated team of volunteers works tirelessly to give these animals a second chance at life.</p>
      <p style={styles.description}>--Spaying and Neutering: To address the root causes of street animal overpopulation, we conduct spaying and neutering campaigns. This helps control the population and reduces the suffering of future generations.</p> 
      <p style={styles.description}>--Community Education: We believe in the power of education to create lasting change. Our outreach programs and workshops educate communities about responsible pet ownership and compassion for street animals.</p>
    </div>
  );
};

const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'corner', // Use 'center' for both horizontal and vertical alignment
      minHeight: '100vh',
      backgroundSize: '100% 100%', // Set background size to cover the entire container
      backgroundPosition: 'center',
    },
  heading: {
    padding:'2px',
    fontSize: '1.5em',
    fontWeight: 'bold',
    color:'#31EED2',
    alignSelf: 'flex-start',
  },
  heading1: {
    padding:'2px',
    fontSize: '1.9em',
    fontWeight: 'bold',
    color:'#060DF7',
    
    marginTop: '43px',
  },
  description: {
    fontSize: '20px',
    marginBottom: '40px',
    color:'black',
    fontWeight: 'bold',
  },
  description1: {
    fontSize: '20px',
    marginBottom: '40px',
    color:'#FF00AA',
    fontWeight: 'bold',
  },
};

export default AboutUs;
