import React, { useState, useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    e.preventDefault();
    if ((/^\s*$/).test(searchQuery)) { 
      alert("Not a valid input!")
      // clear inputfield
      setSearchQuery("")
      return null;
    }
    else {
      console.log("perform search")
      searchContext.searchHandler(searchQuery);
      // clear inputfield
      setSearchQuery("")
      navigate('/searchRes');
    }
  };

  return (
    <div className='flex items-center justify-center mt-3 mb-2 md:mt-0'>
      <form className='flex'
        onSubmit={searchQueryHandler}
      >
        <div className="relative bg-transparent mb-2 mt-1 md:mt-0 md:mb-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <svg className="w-4 h-4 text-teal-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="block w-4 pt-1.5 pb-2 pl-[2.4rem] text-sm text-gray-100 rounded-full bg-transparent outline outline-2 outline-transparent focus:w-full focus:outline-teal-50 focus:bg-slate-800" placeholder="Find product..." required
          />
        </div>
      </form>      
    </div>
  );
};

export default SearchBar;
