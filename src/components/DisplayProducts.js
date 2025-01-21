import React, { useEffect, useState } from 'react';
import './DisplayProducts.css'
import { Link } from 'react-router-dom';

const DisplayProducts = ({data}) => {

    const [productView, setProductView] = useState([])
    useEffect(()=>{
        if(data){
            const slugData = data.slug;
            fetch(`https://dummyjson.com/products/category/${slugData}`)
            .then(response => response.json())
            .then(prdtData => setProductView(prdtData.products))
        }
    },[data])

  return (
    <div className='product-card-container'>
        {productView.map(((product)=>{
            const rating = parseInt(product.rating);
            const filledStars = Array(rating).fill("☆");
            return(
              <Link to={`/products/${product.id}`} state={{product}} key={product.id}>
                <div className="product-card">
                  <img src={product.thumbnail} alt={product.title} className="product-image" />
                  <div className="product-details">
                    <h4 className="product-title">{product.title}</h4>
                    <p className="product-price">
                      ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}{' '}
                      <span className="original-price">${product.price}</span>
                      <span className="discount">({product.discountPercentage}% OFF)</span>
                    </p>
                    <p className="product-rating">
                    {filledStars.map((star, index) => (
                      <span key={index} className="empty-star">{star}</span>
                    ))} {" "} {product.rating} | {product.availabilityStatus}
                    </p>
                  </div>
                </div>
              </Link>
        )}))}
    </div>
  );
};

export default DisplayProducts;