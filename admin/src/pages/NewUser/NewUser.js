import './NewUser.scss';

function NewUser() {
  return (
    <div className="newUserContainer">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>User name</label>
          <input type="text" placeholder="John" />
        </div>

        <div className="newUserItem">
          <label>Full name</label>
          <input type="text" placeholder="John smith" />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="John@gmail.com" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 789" />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="other" />
            <label for="other">Other</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser
