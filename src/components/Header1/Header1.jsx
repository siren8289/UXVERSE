import './Header1.css';
import React from "react";
import Search from './Vector - 1.svg'

const Header1 = () => {
  	return (
    		<div className="header1">
      			<img className="depth-3-frame-0" alt="" src={Search} />
      			<div className="depth-3-frame-1">
        				<b className="group-buy">Group Buy</b>
      			</div>
    		</div>);
};

export default Header1;
