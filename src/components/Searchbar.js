import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
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
      <form className='flex border-2 rounded-2xl'>
        <input
          placeholder="Search product..."
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className='px-3 rounded-l-xl text-sm bg-white focus:outline-none  placeholder:text-sm'
        />
        <button
          onClick={searchQueryHandler}
          className='flex items-center justify-center px-4 border-l rounded-r-xl text-slate-50 text-xl hover:text-purple-600'
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
