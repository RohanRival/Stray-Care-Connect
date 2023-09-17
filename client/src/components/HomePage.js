import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from './Navbar';

const HomePage = () => {
  const pictures = [
    { id: 1, src: 'images/picture1.jpg', formLink: '/form/1' },
    { id: 2, src: 'images/picture2.jpg', formLink: '/form/2' },
    { id: 3, src: 'images/picture3.jpg', formLink: '/form/3' },
    { id: 4, src: 'images/picture4.jpg', formLink: '/form/4' },
    { id: 5, src: 'images/picture5.jpg', formLink: '/form/5' },
    { id: 6, src: 'images/picture6.jpg', formLink: '/form/6' },
    // Add more pictures with their respective form links
  ];

  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>CATEGORIES</h1>
        <div className="picture-grid">
          {pictures.map((picture) => (
            <Link to={picture.formLink} key={picture.id}>
              <img src={picture.src} alt={`Picture ${picture.id}`} />
            </Link>
          ))}
        </div>

        <div className="heading moveLeftToRight">
          <h1 style={{color:'blue'}}>CLICK ON THE IMAGES FOR TREATMENT</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
