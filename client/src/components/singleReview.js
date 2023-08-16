import './singleReview.css';
import '../components/singleReview.css'
import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams,Link,useNavigate} from "react-router-dom";

const ViewReview = ({ user }) => {
  const navigate = useNavigate();
  console.log("Hello")
  const {reviewid} = useParams();
  const [selectedReview, setSelectedReview] = useState({});

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
    console.log(user)
    console.log(reviewid)
    axios
      .get(`http://localhost:8000/review/${user._id}/${reviewid}`, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
        setSelectedReview(res.data);
      })
      .catch((err) => {
        console.log(err);
        // navigate('/dashboard')
      });
  },[]);

  const deleteHandler = () => {
    axios.delete(`http://localhost:8000/review/${user._id}/${reviewid}`, {withCredentials:true})
      .then(res => {
        // removeFromDom(reviewid)
        navigate('/dashboard');
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="ReviewHeader">
        <div className="ReviewInternal">
          <h1>Chicken Tinder</h1>
          <div className="ReviewHeaderRight">
            <Link to='/user/settings'>
            <button>To User Settings</button>
            </Link>
            <Link to="/dashboard">
              <button>
                Home
              </button>
            </Link>
            <button onClick={Logout} className="Logout">logout</button>
          </div>
        </div>
      </div>

      <div className='reviewContainer'>
        <div className='reviewTitle'>
          <h1>Your Tender</h1>
        </div>
            <div className='singleReview'>
              <div className='reviewHeader'>
                <p id='restaurantName'>Restaurant: {selectedReview.restaurantName}</p>
                <p>Price: {selectedReview.price}</p>
              </div>
              <div className='reviewBody'>
                <div className='reviewBodyRight'>
                  <p>Flavor: {selectedReview.flavor}</p>
                  <p>Crispiness: {selectedReview.crispiness}</p>
                  <p>Size: {selectedReview.size}</p>
                </div>
                <div className='ReviewBodyLeft'>
                  <p>Comments:</p>
                  <p> {selectedReview.comments}</p>
                </div>
              </div>
            <div className="editReviewButton">
              <Link to={`/edittender/${reviewid}`}> 
              {/* change to edittender/${reviewid} */}
                <button className='button'>Edit your Tender</button>
              </Link>
            </div>
            <div className='DeleteReviewButton'>
              <button onClick={(e) =>{deleteHandler()}}>
                Delete
              </button>
            </div>
            </div>
      </div>
    </div>
  )
};

export default ViewReview;