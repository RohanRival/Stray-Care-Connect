import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FormPage.css'
import Navbar from './Navbar';
import axios from 'axios';

const FormPage = () => {
  // Use useParams to get the ID from the URL
  const { id } = useParams();

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    animal: '',
    injury : '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    const message = 'Submitted Successfully'
    alert(message);
    axios.post('http://localhost:3001/form', formData)
      .then(result => {
        console.log('Response:', result.data);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  };
  
  return (
    <div><Navbar/>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>VITERINARY FORM</h2>
        <div className="form-group">
          <label>NAME:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>EMAIL:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>PHONE:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>ADDRESS:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>CITY:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>ANIMAL:</label>
          <input
            type="text"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>INJURY TYPE:</label>
          <input
            type="text"
            name="injury"
            value={formData.injury}
            onChange={handleChange}
          />
        </div>
        
      
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};
export default FormPage;
