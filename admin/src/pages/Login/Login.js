import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loginCallApi } from "service/apiCalls";
import { useHistory } from 'react-router';
import './Login.scss';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const currentUser = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch()
  const handleCLick = (e) => {
    e.preventDefault();
    loginCallApi(dispatch, { username, password });
  }

  useEffect(() => {
    console.log('currentUser..',currentUser);
    if(currentUser){
      history.push('/')
    }
  },[currentUser])

  return (
    <div className="loginContainer">
      <input
        className="loginInput"
        type="text"
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="loginInput"
        type="text"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className="buttonLogin"
        onClick={handleCLick}
      >
        Login
      </button>
    </div>
  )
}

export default Login
