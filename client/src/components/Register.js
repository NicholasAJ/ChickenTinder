import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
    setUser({...user, [e.target.email]:e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
      .then((res) => {
        console.log(res, "register user front end");
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
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
  )
}

export default Register;