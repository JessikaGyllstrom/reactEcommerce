import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';

function Categories() {
  const { products } = useContext(ProductContext);
  
  const categoryArr = products.reduce((accumulator, currentValue) => [
    ...accumulator.filter((obj) => obj.category !== currentValue.category), currentValue
  ], []);
  
  return (
    <div className='flex justify-center  mb-5 mt-10'>
      <div className="flex text-slate-50 px-2 divide-x-[0.9px] divide-gray-500">
        {categoryArr.map((cat, idx) => {
          return (
            <div key={idx}>
              <Link to={`/categoryItems/${cat.category}`}><p className="text-gray-400 mx-2 text-sm lg:text-lg uppercase">{cat.category}</p></Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
