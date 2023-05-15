import React from 'react'
import { categories } from '../../data'
import CategoryItem from '../category-item/CategoryItem'
import './category-directory-style.scss'

const CategoryDir = () => {
    return (
        <div className='categories-container'>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      )
}

export default CategoryDir