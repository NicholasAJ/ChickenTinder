import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Dashboard = (props) => {
  const navigate = useNavigate()
  const Logout = () => {
    axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
      .then((res) => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return(
    <div>
      <h1>Welcome to the Dashboard</h1>
      <div>
        <button onClick={Logout}>logout</button>
      </div>
    </div>
  )
}

export default Dashboard;