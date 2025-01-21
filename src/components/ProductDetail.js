import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart } from '../store/cartSlice';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
    },[id])
    console.log(product);
    const handleAddToCart = ()=>{
      dispatch(addToCart(product))
        alert(`Added ${product.title} to cart!`);
    }
    if (!product) return <div>Loading...</div>;
    
    const rating = parseInt(product.rating);
    const filledStars = Array(rating).fill("☆");
    return (
        <div className="product-detail">
          <div className="product-images">
            <img src={product.thumbnail} alt={product.title} className="main-image" />
            <div className="image-gallery">
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={`${product.title}-${index}`} className="gallery-image" />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="description">{product.description}</p>
            <p className="price" style={{fontWeight: 'Bold'}}>
              ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}{' '}
              <span className="original-price">${product.price}</span>
              <span className="discount"> ({product.discountPercentage}% OFF)</span>
            </p>
            <p className="rating">
            {filledStars.map((star, index) => (
                      <span key={index} className="empty-star">{star}</span>
            ))} {product.rating} | {product.availabilityStatus}
            </p>
            <p className="stock">Stock: {product.stock}</p>
            <p className="warranty">Warranty: {product.warrantyInformation}</p>
            <p className="return-policy">Return Policy: {product.returnPolicy}</p>
            <p className="shipping">Shipping: {product.shippingInformation}</p>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
    );
};

export default ProductDetail;