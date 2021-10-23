import { Visibility } from '@mui/icons-material';
import React from 'react'
import "./WidgetSmall.scss";

const WidgetSmall = () => {
  return (
    <div className="widgetSmallContainer">
      <span class="widgetSmallTitle">New join member</span>
      <ul class="widgetSmallList">
        <li class="widgetSmallListItem">
          <img 
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmallImg"
          />
          <div class="widgetSmallUser">
            <span class="widgetSmallUserName">Anna Keller</span>
            <span class="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>

        <li class="widgetSmallListItem">
          <img 
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmallImg"
          />
          <div class="widgetSmallUser">
            <span class="widgetSmallUserName">Anna Keller</span>
            <span class="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>

        <li class="widgetSmallListItem">
          <img 
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmallImg"
          />
          <div class="widgetSmallUser">
            <span class="widgetSmallUserName">Anna Keller</span>
            <span class="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>

        <li class="widgetSmallListItem">
          <img 
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmallImg"
          />
          <div class="widgetSmallUser">
            <span class="widgetSmallUserName">Anna Keller</span>
            <span class="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>

        <li class="widgetSmallListItem">
          <img 
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmallImg"
          />
          <div class="widgetSmallUser">
            <span class="widgetSmallUserName">Anna Keller</span>
            <span class="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSmall
