import React, {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ShoppingCart from '../utils/shopping-cart.png';
import logo from '../utils/logo.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const cartItems = useSelector(state => state.cart.items)
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src={logo} className="App-logo" alt="logo" /><strong className="App-Name">ShopIT</strong>
            </Link>
            <div className="menu-icon" onClick={toggleMenu}>
              <i className={isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'} style={{ color: "#FFF" }}></i>
            </div>
            <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <div className="cart">
                    <div className="cart-icon">
                      <img src={ShoppingCart} className="cart-logo" alt="cart" />
                    </div>
                    <div className="badge">{cartItems.length}</div>                    
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;