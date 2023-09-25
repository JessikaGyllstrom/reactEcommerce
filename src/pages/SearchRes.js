import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const searchContext = useContext(SearchContext);
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((product) => (product.title.toLowerCase().includes(searchContext.query)))

  // get number of searchresults
  const searchHits = products.filter((product) => (product.title.toLowerCase().includes(searchContext.query)))
  const searchMatch = searchHits.length;

  return (
    <div className="container mx-auto h-screen">
      <div className="flex w-full flex-col">
        {searchMatch === 1
          ? <h1 className="flex mx-auto justify-center font-semibold tracking-wide text-xl text-light-50 mb-3">Searchresult: {searchMatch}</h1>
          : <h1 className="flex mx-auto justify-center font-semibold tracking-wide text-xl text-light-50 mb-3">Searchresults: {searchMatch}</h1>
        }
      </div>
      <div className="flex justify-center">
        <div className="grid mx-auto">
            {searchContext.query && searchMatch > 0 ?
              filteredProducts.map((item) => (
                <div  key={item.id} className="flex flex-col bg-white shadow-md rounded-xl my-3 p-3  duration-500 hover:scale-103 hover:shadow-xl">
                  <div className="flex w-full justify-center items-center p-5">
                    <div className="pr-5">
                      <img src={item.image} alt={item.title} className="max-w-[150px]" />
                    </div>
                  <div className="flex flex-col">
                    <Link to={`/product/${item.id}`} className="text-lg">{item.title}</Link>
                  <div>Price: ${item.price}</div>
                </div>
              </div>
            </div>
            ))  
            : <div className="text-light-50">No matches for query "{searchContext.query}"</div>
          }
          </div>
        </div>
    </div>
  )
}

export default SearchResult;
