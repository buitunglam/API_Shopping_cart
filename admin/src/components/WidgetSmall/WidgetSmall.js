import { Visibility } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { userRequest } from 'service/baseRequest';
import "./WidgetSmall.scss";

const WidgetSmall = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        console.log('res..', res.data);
        setUsers(res.data);
      } catch (error) {
        console.log('user error..', error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="widgetSmallContainer">
      <span className="widgetSmallTitle">New join member</span>
      <ul className="widgetSmallList">
        {
          users.map(user => (
            <li key={user?._id} className="widgetSmallListItem">
              <img
                src={user?.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                alt="avatar user"
                className="widgetSmallImg"
              />
              <div className="widgetSmallUser">
                <span className="widgetSmallUserName">{user?.username}</span>
                <span className="widgetSmallUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmallButton">
                <Visibility className="widgetSmallIcon" />
                Display
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default WidgetSmall
