import '../App.css';
import '../components/singleReview.css'
import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams,Link,useNavigate} from "react-router-dom";

const ViewReview = ({ user }) => {
  console.log("Hello")
  // const {id} = useParams();
  const [oneReview, setOneReview] = useState({});
  // const navigate = useNavigate();
  //create a way to query database with user id to get review id, set review id into state and pass it into the route

  useEffect(() => {
    console.log(user,oneReview)
    axios
      .get(`http://localhost:8000/review/${user._id}/${oneReview._id}`, {withCredentials:true})
      // .get(`http://localhost:8000/review/single/${id}`, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
        setOneReview(res.data);
      })
      .catch((err) => {
        console.log(err);
        // navigate('/dashboard')
      });
  },[]);

  return (
    <div>
      <div className='reviewContainer'>
        <div className='reviewTitle'>
          <h1>Your Tender</h1>
          <Link to="/dashboard">Home</Link>
        </div>
            <div className='singleReview'>
              <div className='reviewHeader'>
                <p id='restaurantName'>{oneReview.restaurantName}</p>
                <p>Price: {oneReview.price}</p>
              </div>
              <div className='reviewBody'>
                <p>Flavor: {oneReview.flavor}</p>
                <p>Crispiness: {oneReview.crispiness}</p>
                <p>Size: {oneReview.size}</p>
                <p>Comments: {oneReview.comments}</p>
              </div>
            </div>
            <div >
              <Link to={'/edittender'}>
                <button className='button'>Edit your Tender</button>
              </Link>
            </div>
      </div>
    </div>
  )
};

export default ViewReview;