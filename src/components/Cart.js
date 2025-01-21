import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleIncrement = (id) => {
      dispatch(incrementQuantity({ id }));
    }

    const handleDecrement = (id) => {
        dispatch(decrementQuantity({id}))
    }

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    if (cartItems.length === 0) {
        return <div>Your cart is empty.</div>;
    }
    
    return (
        <div className="cart-container">
          {cartItems.map(item => (
            <div className='cart-sub-container'>
              <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>Price: ${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}</p>
                  <div className='btnContainer'>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrement(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                    <div>                      
                      <button onClick={() => handleRemove(item.id)} className="remove-button">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{backgroundColor: 'orange'}}>Save for later</div>
            </div>
          ))}
        </div>
    );
};

export default Cart;