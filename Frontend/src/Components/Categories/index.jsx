import React from 'react'
import { categories } from "../../Asset/data";
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <div className='flex p-5 justify-between flex-col sm:flex-row'>
      
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}

      
    </div>
  );
}

export default Categories