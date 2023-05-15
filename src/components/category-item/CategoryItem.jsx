import React from 'react'
import './category-item-style.scss'

const CategoryItem = ({category}) => {
    const {title, img, background_color} = category
    return (
        <div className="single-category-container" style={{backgroundColor: `${background_color}`}}>
          <div
            className="category-background"
            style={{
                backgroundImage: `url(${img})`,
              }}
          />
          <div className="category-body-container">
            <h5>{title}</h5>
          </div>
        </div>
      );
}

export default CategoryItem