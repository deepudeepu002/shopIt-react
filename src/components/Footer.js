import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>ShopIT</h2>
                </div>
                <div className="footer-links">
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#about" className="footer-link">About</a>
                    <a href="#products" className="footer-link">Products</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" className="facebook-icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://twitterfacebook.com" className="twitter-icon"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com" className="instagram-icon"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;