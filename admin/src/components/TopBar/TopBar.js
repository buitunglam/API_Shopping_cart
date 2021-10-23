import React from "react";
import './TopBar.scss';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <img src="https://bizweb.dktcdn.net/100/339/085/themes/699262/assets/logo.png?1624497451198" alt="logo" className="logo"/>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="TopIconsBagde">3</span>
          </div>

          <div className="topBarIconContainer">
            <Language />
            <span className="TopIconsBagde">3</span>
          </div>

          <div className="topBarIconContainer">
            <Settings />
            <span className="TopIconsBagde">3</span>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="topAvatar" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
