import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';

function Categories() {
  const { products } = useContext(ProductContext);
  
  const categoryArr = products.reduce((accumulator, currentValue) => [
    ...accumulator.filter((obj) => obj.category !== currentValue.category), currentValue
  ], []);
  
  return (
    <div className='flex justify-center  mb-5'>
      <div className="flex items-center flex-col text-slate-50 px-3 md:divide-x-[0.9px] md:divide-gray-500 md:flex-row">
        {categoryArr.map((cat, idx) => {
          return (
            <div key={idx}>
              <Link to={`/categoryItems/${cat.category}`}><p className="underline underline-offset-8 py-2 md:no-underline decoration-gray-700	text-gray-400 mx-2 text-sm lg:text-lg uppercase">{cat.category}</p></Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
