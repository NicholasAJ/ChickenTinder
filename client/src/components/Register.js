import "./Register.css"
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register';

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username:'',
    email:'',
    name:'',
    password:'',
    confirmPassword:''
  })

  const changeHandler = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
      .then((res) => {
        console.log(res, "register user front end");
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <div className="RegisterBody">
      <div>
        <h1>Chicken Tinder</h1>
        <p>Register for Tendies</p>
      </div>
      <form onSubmit={submitHandler} className="RegisterForm">
        <div>
          <label>Username:</label>
          <input type='text' onChange={changeHandler} value={user.username} name='username'/>
        </div>

        <div>
          <label>Email:</label>
          <input type='text' onChange={changeHandler} value={user.email} name='email'/>
        </div>

        <div>
          <label>Name:</label>
          <input type='text' onChange={changeHandler} value={user.name} name='name'/>
        </div>

        <div>
          <label>Password:</label>
          <input type='password' onChange={changeHandler} value={user.password} name='password'/>
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type='password' onChange={changeHandler} value={user.confirmPassword} name='confirmPassword' />
        </div>

        <div>
          <button>Register</button>
        </div>
        <Link to={'/login'}>Already have an account?</Link>
      </form>
      </div>
    </div>
  )
}

export default Register;