import React from 'react'
import './SideBar.scss';
import {
  LineStyle, Timeline, TrendingUp, PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dash Board</h3>
          <ul className="sideBarList">
            <li className="sideBarlistItem active">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarlistItem">
              <Timeline className="sideBarIcon" />
              Analystics
            </li>
            <li className="sideBarlistItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sideBarlistItem active">
                <PermIdentity className="sideBarIcon" />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sideBarlistItem">
                <Storefront className="sideBarIcon" />
                Products
              </li>
            </Link>
            <li className="sideBarlistItem">
              <AttachMoney className="sideBarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarlistItem active">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarlistItem">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarlistItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarlistItem active">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarlistItem">
              <Timeline className="sideBarIcon" />
              Ananytic
            </li>
            <li className="sideBarlistItem">
              <Report className="sideBarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
