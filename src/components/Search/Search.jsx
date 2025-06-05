import './Search.css';
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
};

export default Search;
