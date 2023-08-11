import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'

const Dashboard = (props) => {
  const [allReviews, setAllReviews] = useState([]);
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
      .get(`http://localhost:8000/review`)
      .then((res) => {
        console.log(res.data);
        setAllReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }, []);

  return(
    <div>
      <div>
        <h1>Welcome to the Dashboard</h1>
        <button onClick={Logout}>logout</button>
      </div>
      <div className="mainDisplay">
        <h1 className="dashHeader">Your Chicken Tenders</h1>
        {allReviews.map((review,index) => {
        return(
          <div className="displayContainer" key={review._id}>
            <div className="displayHeader">
              {/* <Link to={`/chickentinder/tender/${review._id}`}> */}
              <p>{review.restaurantName}</p>
              {/* </Link> */}
              <p>Price: {review.price}</p>
            </div>
            <div className="displayBody">
              <p>Flavor: {review.flavor}</p>
              <p>Crispiness: {review.crispiness}</p>
              <p>Size: {review.size}</p>
              <p>Comment: {review.comments}</p>
            </div>
          </div>)
        })}
        <div>
          <button id="button">
            {/* <Link to={`/chickentinder/new`}> */}
              Add a Tender
            {/* </Link> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;