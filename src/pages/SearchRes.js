import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const searchContext = useContext(SearchContext);
  const { products } = useContext(ProductContext);

  console.log(searchContext.query)

  const filteredProducts = products.filter((product) => (product.title.toLowerCase().includes(searchContext.query)))

  // get number of searchresults
  const searchHits = products.filter((product) => (product.title.toLowerCase().includes(searchContext.query)))
  
  const searchMatch = searchHits.length;
  console.log(searchMatch)

  return (
    <div className="container mx-auto h-screen">
      <div className="flex justify-center mx-auto items-center bg-white p-8">
        <div className="flex flex-col items-center">
          {searchMatch === 1 ? <h1 className="w-full flex mx-auto justify-center font-semibold tracking-wide text-xl">Searchresult: {searchMatch}</h1>
            : <h1 className="w-full flex mx-auto justify-center font-semibold tracking-wide text-xl">Searchresults: {searchMatch}</h1>
          }
          {searchContext.query && searchMatch > 0 ?
            filteredProducts.map((item) => (
              <div key={item.id} className="flex items-center shadow-md rounded-xl p-5">
                <div className="pr-5">
                  <img src={item.image} alt={item.title} className="max-w-[150px]" />
                </div>
                <div className="flex flex-col">
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                  <div>${item.price}</div>
                </div>
              </div>
            ))  
            : <div>No matches for "{searchContext.query}"</div>
          }
        </div>
      </div>
    </div>
  )
}

export default SearchResult;
    // <div className="container mx-auto">
    //   <div className="flex justify-center mx-auto w-[70%] lg:w-[60%] xl:w[50%] bg-white shadow-md rounded-xl p-8 duration-500 hover:scale-103 hover:shadow-xl">
    //     <div className="flex flex-col lg:flex-row items-center">
    //       <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
    //         <img className="max-w-[200px]" src={image} alt={title} />
    //       </div>
    // <div className="flex flex-col bg-white shadow-md rounded-xl p-3  duration-500 hover:scale-103 hover:shadow-xl">
    //   <div className="flex w-full justify-center">
    //     <Link to={`/product/${id}`}><img src={image} alt={title} className="h-48 object-contain group-hover:scale-110 transition duration-300"/></Link>
    //   </div>
    //   <div className="flex h-full flex-col p-2">
    //     <div className="text-sm text-slate-400 mt-3 uppercase">{category}</div>