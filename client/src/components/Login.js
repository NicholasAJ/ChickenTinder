import './Login.css'
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({setUser}) => {
  const navigate = useNavigate();
  const [userLogin,setUserLogin] = useState({
    email:'',
    password:'',
    name:''
  });

  const changeHandler = (e) => {
    setUserLogin({...userLogin, [e.target.name]:e.target.value}) 
  }
  const loginHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
      .then((res) => {
        console.log(JSON.stringify(res, null, 2));
        setUser(res.data.user)
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // if (Object.keys(token).length) {
  //   return <Dashboard/>
  // }

  return (
    <div className='LoginBody'>
      <h2>Login</h2>
      <form onSubmit={loginHandler} className='LoginForm'>
        <div className='LoginInput'>
          <label className='LoginLable'>Email: </label>
          <input type='text' name='email' value={userLogin.email} onChange={changeHandler}/>
        </div>
        <div className='LoginInput'>
          <label className='LoginLabel'>Password: </label>
          <input type='password' name='password' value={userLogin.password} onChange={changeHandler}/>
        </div>
        <button id='LoginButton'>Login</button>
      </form>
      <Link to={'/'}>Don't have an account? Click here to find your tendies</Link>
    </div>
  )
}

export default Login;