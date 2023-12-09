import React from 'react';
import './CategoryCard.css'
import { Link } from 'react-router-dom';

function CategoryCard({category}) {
  return (
    <div className='categorycard'>
      <div className="categorycard-img-container">
        <img src={category.imgSrc} alt={category.imgSrc} />
      </div>
      <div className="categorycard-details">
        <h4>{category.name}</h4>
        <p>{category.description} </p>
      </div>
      <Link to={'/products'}><button>See more</button></Link>
    </div>
  );
}

export default CategoryCard;
