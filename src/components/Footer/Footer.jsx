import './Footer.css';
import React from "react";
import HomeIcon from './Footer - 0.svg';
import ExploreIcon from './Footer - 1.svg';
import CreateIcon from './Footer - 2.svg';
import InboxIcon from './Footer - 3.svg';
import ProfileIcon from './Footer - 4.svg';



const Footer = () => {
  return (
    <div className="footer">
      <div className="depth-2-frame-0">
        <div className="depth-3-frame-1">
          <img className="depth-4-frame-0" alt="" src={HomeIcon} />
          <div className="depth-4-frame-1">
            <div className="home">Home</div>
          </div>
        </div>
        <div className="depth-3-frame-1">
          <img className="depth-4-frame-0" alt="" src={ExploreIcon} />
          <div className="depth-4-frame-1">
            <div className="home">Explore</div>
          </div>
        </div>
        <div className="depth-3-frame-1">
          <img className="depth-4-frame-0" alt="" src={CreateIcon} />
          <div className="depth-4-frame-1">
            <div className="home">Create</div>
          </div>
        </div>
        <div className="depth-3-frame-1">
          <img className="depth-4-frame-0" alt="" src={InboxIcon} />
          <div className="depth-4-frame-1">
            <div className="home">Inbox</div>
          </div>
        </div>
        <div className="depth-3-frame-1">
          <img className="depth-4-frame-0" alt="" src={ProfileIcon} />
          <div className="depth-4-frame-1">
            <div className="home">Profile</div>
          </div>
        </div>
      </div>
      <div className="depth-2-frame-1" />
    </div>
  );
};


export default Footer;
