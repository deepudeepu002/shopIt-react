import ShowCategory from './ShowCategory';
import DisplayProducts from './DisplayProducts';
import { useState } from 'react';
// import { Route, Routes } from 'react-router';
// import ProductDetail from './ProductDetail';

const Body = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const handleCategoryClick = (category)=>{
        setSelectedCategory(category)
    }
    return(
        <div>
            <h1>Body</h1>
            <ShowCategory onCategoryClick={handleCategoryClick} />
            <DisplayProducts data={selectedCategory} />
        </div>
    )
}

export default Body;