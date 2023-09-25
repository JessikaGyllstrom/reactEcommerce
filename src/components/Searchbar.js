import React, { useState, useContext } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
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
    <div className='flex items-center justify-center'>
      <form className='flex'
        onSubmit={searchQueryHandler}
      >
        <div class="relative bg-transparent">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-teal-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="block w-4 py-2 pl-10 text-sm text-gray-100 rounded-full bg-transparent outline outline-1 outline-transparent focus:w-full focus:outline-teal-50" placeholder="Find product..." required
          />
        </div>
      </form>      
    </div>
  );
};

export default SearchBar;
