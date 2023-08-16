import "./Dashboard.css";
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'

const Dashboard = ({ user }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [error, setError] = useState({});
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
  useEffect(() => {
    axios
      .get(`http://localhost:8000/review/${user._id}`, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
        setAllReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log('status: ' + err.response?.status);
        setError(err);
      });
  }, []);

  return(
    <div className="DashboardBody">
      {!user._id ?       
      <div>
        <h1>YOU MUST BE LOGGED IN </h1>
        <Link to='/login'>Login here</Link>
      </div>: <div>

      <div className="DashboardHeader">
        <div className="DashHeaderInternal">
          <h1>Chicken Tinder</h1>
          <div className="DashboardHeaderRight">
            <button onClick={Logout} className="Logout">logout</button>
            <Link to='/user/settings'>
            <button>To User Settings</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mainDisplay">
        <h1>{user.name}, Your Chicken Tenders</h1>
        {allReviews.map((review,index) => {
        return(
          <div className="displayContainer" key={review._id}>
            <div className="displayHeader">
              <Link to={`/dashboard/${review._id}`}>
              <p className="RestName">{review.restaurantName}</p>
              </Link>
              <p>Price: {review.price}</p>
            </div>
            <div className="displayBody">
              <div>
              <p>Flavor: {review.flavor}</p>
              <p>Crispiness: {review.crispiness}</p>
              <p>Size: {review.size}</p>
              </div>
              <div className="Comments">
                <p>Comment: </p>
                <p id="CommentText">{review.comments}</p>
              </div>
            </div>
          </div>)
        })}
        <div>
          <button id="button">
            <Link to={`/newtender`}>
              Add a Tender
            </Link>
          </button>
        </div>
      </div>
    </div>}
    </div>
  )
}

export default Dashboard;