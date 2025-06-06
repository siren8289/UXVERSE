import './Search.css';
<<<<<<< HEAD
import SearchIcon from './Vector-0.svg';

const Search = () => {
  return (
    <div className="search-container">
      <img
        src="/Vector-0.svg"
        alt="Search Icon"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />
    </div>
  );
=======
import React from "react";
import SearchIcon from './Search - 0.svg'

const Search = () => {
  	return (
    		<div className="search">
      			<div className="depth-4-frame-0">
        				<img className="depth-5-frame-0" alt="" src={SearchIcon} />
        				<div className="depth-5-frame-1">
          					<div className="search1">Search</div>
        				</div>
      			</div>
    		</div>);
>>>>>>> main
};

export default Search;
