import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowCategory = ({onCategoryClick}) => {

    const [catData, setCatData] = useState([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/products/categories")
        .then(response => response.json())
        .then(data => setCatData(data))
    },[])

  return (
    <div style={{display: 'flex', gap:'10px', flexWrap: 'wrap', padding: '10px'}}>
      {catData ? catData.map((data,index)=>(
        <Link to={'/'} key={data.slug} onClick={() => onCategoryClick(data)}>
            <div className='cat-card' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid orange', borderRadius: '30px', padding: '10px'}}>
                <img src={data.url} alt={data.name} width="100px" height="100px" />
                <h6>{data.name}</h6>
            </div>
        </Link>
      )) : <h1>Loading...</h1> }
    </div>
  );
};

export default ShowCategory;