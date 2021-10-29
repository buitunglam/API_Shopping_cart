import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, Publish, LocationSearching } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import './User.scss';

const User = () => {
  return (
    <div className="userContainer">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'>
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userWrapper">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna Becker</span>
              <span className="userShowUserTitle">Software engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowBottomInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userInfoTitle">AnnaBeck99</span>
            </div>

            <div className="userShowBottomInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userInfoTitle">10.12.1999</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowBottomInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userInfoTitle">+1 123 456 67</span>
            </div>

            <div className="userShowBottomInfo">
              <MailOutline className="userShowIcon" />
              <span className="userInfoTitle">annabeck99@gmail.com</span>
            </div>

            <div className="userShowBottomInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="AnnaBeck99"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>

            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default User
