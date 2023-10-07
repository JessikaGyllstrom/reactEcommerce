import React from 'react';
import { FaStar } from 'react-icons/fa'; 

function StarRating({ rating }) {
  return (
    <div className="flex lg:text-lg">
      <FaStar className={`mx-0.5 ${rating >= 1 ? 'text-teal-400' : 'text-gray-300'}`} />
      <FaStar className={`mx-0.5 ${rating >= 2 ? 'text-teal-400' : 'text-gray-300'}`} />
      <FaStar className={`mx-0.5 ${rating >= 3 ? 'text-teal-400' : 'text-gray-300'}`} />
      <FaStar className={`mx-0.5 ${rating >= 4 ? 'text-teal-400' : 'text-gray-300'}`} />
      <FaStar className={`mx-0.5 ${rating >= 5 ? 'text-teal-400' : 'text-gray-300'}`} />
    </div>
  )
}

export default StarRating;