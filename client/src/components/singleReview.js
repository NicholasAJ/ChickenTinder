import '../App.css';
import '../components/singleReview.css'
import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams,Link,useNavigate} from "react-router-dom";

const ViewReview = ({ user }) => {
  const navigate = useNavigate();
  console.log("Hello")
  const {reviewid} = useParams();
  const [selectedReview, setSelectedReview] = useState({});


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
      <div className='reviewContainer'>
        <div className='reviewTitle'>
          <h1>Your Tender</h1>
          <Link to="/dashboard">Home</Link>
        </div>
            <div className='singleReview'>
              <div className='reviewHeader'>
                <p id='restaurantName'>{selectedReview.restaurantName}</p>
                <p>Price: {selectedReview.price}</p>
              </div>
              <div className='reviewBody'>
                <p>Flavor: {selectedReview.flavor}</p>
                <p>Crispiness: {selectedReview.crispiness}</p>
                <p>Size: {selectedReview.size}</p>
                <p>Comments: {selectedReview.comments}</p>
              </div>
            </div>
            <div >
              <Link to={`/edittender/${reviewid}`}> 
              {/* change to edittender/${reviewid} */}
                <button className='button'>Edit your Tender</button>
              </Link>
            </div>
            <div>
                <button onClick={(e) =>{deleteHandler()}}>
                  Delete
                </button>
              </div>
      </div>
    </div>
  )
};

export default ViewReview;