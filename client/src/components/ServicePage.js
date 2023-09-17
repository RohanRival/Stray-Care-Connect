import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from './CartContext';

const ServicePage = () => {
  const vaccinations = [
    { id: 1, name: 'Rabies Vaccine', price: 50 },
    { id: 2, name: 'Distemper Vaccine', price: 40 },
    { id: 3, name: 'Parvo Vaccine', price: 45 },
    { id: 4, name: 'Leptospirosis Vaccine', price: 35 },
    { id: 5, name: 'Bordetella Vaccine', price: 30 },
  ];

  const { addToCart } = useCart();
  const [hoveredItems, setHoveredItems] = useState(Array(vaccinations.length).fill(false));
  const [clickedItems, setClickedItems] = useState(Array(vaccinations.length).fill(false));

  const handleMouseEnter = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = true;
    setHoveredItems(newHoveredItems);
  };

  const handleMouseLeave = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = false;
    setHoveredItems(newHoveredItems);
  };

  const toggleClicked = (index) => {
    const newClickedItems = [...clickedItems];
    newClickedItems[index] = !newClickedItems[index];
    setClickedItems(newClickedItems);
  };

  const styles = {
    servicePage: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'rgba(247, 247, 247, 0.4)',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    pageTitle: {
      fontSize: '32px',
      marginBottom: '20px',
      color: '#333',
    },
    vaccineList: {
      listStyle: 'none',
      padding: 0,
    },
    vaccineItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      margin: '10px 0',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    },
    vaccineItemHover: {
      transform: 'scale(1.02)',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
    vaccineInfo: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft: '10px',
    },
    vaccineName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    vaccinePrice: {
      fontSize: '20px',
      color: '#777',
    },
    addToCartButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'background-color 0.3s ease-in-out',
      width: '120px',
    },
    cartButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      fontSize: '18px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
      marginTop: '20px',
      display: 'inline-block',
    },
    cartButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.servicePage}>
        <h1 style={styles.pageTitle}>Animal Vaccinations</h1>
        <ul style={styles.vaccineList}>
          {vaccinations.map((vaccine, index) => (
            <li
              key={vaccine.id}
              style={hoveredItems[index] ? { ...styles.vaccineItem, ...styles.vaccineItemHover } : styles.vaccineItem}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div style={styles.vaccineInfo}>
                <span style={styles.vaccineName}>{vaccine.name}</span>
                <span style={styles.vaccinePrice}>${vaccine.price}</span>
              </div>
              <button
                onClick={() => {
                  addToCart(vaccine);
                  toggleClicked(index); // Toggle the 'clicked' state for this item
                }}
                style={{
                  ...styles.addToCartButton,
                  backgroundColor: clickedItems[index] ? '#000' : '#007bff',
                }}
              >
                {clickedItems[index] ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </li>
          ))}
        </ul>
        <Link to="/cart" style={styles.cartButton}>
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default ServicePage;
