// import '../components/singleReview.css'
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const UserSettings = ({ user }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/user/${user._id}`, {withCredentials:true})
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/user/update/${user._id}`, {
        username,
        email,
        name
      }, {withCredentials:true})
      .then ((res) => {
        console.log(res.data)
        navigate(`/user/settings`)
      })
      .catch ((err) => {
        console.log(err);
        console.log('**** update handler for user clientside ****')
      });
  };

  return(
    <>
    <h1> User Settings </h1>
    <Link to="/dashboard">
              <button>
                Home
              </button>
            </Link>
    <div>
      <form>
        <div>
          <p>Username: {user.username}</p>
          <label>Username:</label>
          <input type='text' onChange={(e) => setUsername(e.target.value)} value={user.username} name='username'/>
        </div>

        <div>
          <p>Email: {user.email}</p>
          <label>Email:</label>
          <input type='text' onChange={(e) => setEmail(e.target.value)} value={user.email} name='email'/>
        </div>

        <div>
          <p>Name: {user.name}</p>
          <label>Name:</label>
          <input type='text' onChange={(e) => setName(e.target.value)} value={user.name} name='name'/>
        </div>
        <button onClick={(e) =>{submitHandler()}}>Submit</button>
      </form>
      <button onClick={(e) => {deleteHandler()}}>Delete</button>
    </div>
    </>
  )
}
export default UserSettings;