import React from 'react';
import Navbar from './Navbar';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const cartPageStyles = {
    fontFamily: 'Arial, sans-serif',
    width: '500px', // Set a fixed width
    height: '500px', // Set a fixed height to make it a square
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px',
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const headerStyles = {
    fontSize: '24px',
    margin: '0 0 20px',
  };

  const cartItemsContainerStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    
  };

  const cartItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  };

  const itemDetailsStyles = {
    flex: '1',
  };

  const itemNameStyles = {
    fontSize: '20px',
  };

  const itemPriceStyles = {
    fontSize: '20px',
    color: '#333',
    padding:'100px',
  };

  const removeButtonStyles = {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    padding: '10px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const totalPriceStyles = {
    marginTop: '20px',
    textAlign: 'right',
  };

  const checkoutButtonStyles = {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '20px',
  };

  const checkoutButtonHoverStyles = {
    backgroundColor: '#45a049',
  };

  return (
    <div><Navbar/>
    <div style={cartPageStyles} className="cart-page">
      <h1 style={headerStyles}>Your Shopping Cart</h1>
      <div style={cartItemsContainerStyles} className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} style={cartItemStyles} className="cart-item">
              <div style={itemDetailsStyles} className="item-details">
                <span style={itemNameStyles} className="item-name">
                  {item.name}
                </span>
                <span style={itemPriceStyles} className="item-price">
                  ${item.price}
                </span>
              </div>
              <div className="item-quantity">
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={removeButtonStyles}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
              
            </div>
            
          ))
        )}
        
      </div>
      
      {cartItems.length > 0 && (
        <div style={totalPriceStyles} className="total-price">
          <span>Total Price: ${totalPrice}</span>
        </div>
      )}
      <button style={checkoutButtonStyles} className="checkout-button">
        Checkout
      </button>
    </div>
    </div>
  );
};

export default CartPage;
