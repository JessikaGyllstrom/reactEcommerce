import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';

function Categories() {
  const { products } = useContext(ProductContext);
  console.log(products.category)


  const categoryArr = products.reduce((accumulator, currentValue) => [
    ...accumulator.filter((obj) => obj.category !== currentValue.category), currentValue
  ], []);

  console.log(categoryArr)
  
  return (
    <div className='w-max mx-auto mb-5'>
      <div className="flex text-slate-50 px-2 divide-x-[0.9px] divide-gray-600">
        {categoryArr.map((cat) => {
          return <Link to={`/categoryItems/${cat.category}`}><p className="text-gray-400 mx-5  uppercase">{cat.category}</p></Link>
        })}
      </div>
    </div>
  )
}

export default Categories