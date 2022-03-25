import React from 'react'
import {popularProducts} from '../../Asset/data'
import ProductItem from './ProductItem'

function Products() {
  return (
    <div className='p-4 flex flex-wrap justify-between'>

        {popularProducts.map(item=>(
            <ProductItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products