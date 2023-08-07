import React, {useState} from 'react';
import axios from 'axios';
import {navigate, useNavigate} from 'react-router-dom'

const logout = () => {
  const navigate = useNavigate();
  axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
    .then((res) => {
      console.log(res)
      navigate('/')
    })
    .catch((err) => {
      console.log(err)
    })
}

const Dashboard = (props) => {
  return(
    <div>
      <h1>Welcome to the Dashboard</h1>
      <div>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  )
}

export default Dashboard;