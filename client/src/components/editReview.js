// import './new-editReview.css';
import '../components/singleReview.css'
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const EditReview = ({user}) => {
  const { reviewid } = useParams();
  const navigate = useNavigate();
  const [restaurantName, setRestaurantName] = useState("");
  const [price, setPrice] = useState(0);
  const [flavor, setFlavor] = useState(0);
  const [crispiness, setCrispiness] = useState(0);
  const [size, setSize] = useState(0);
  const [comments, setComment] = useState("");
  const [errors,setErrors] = useState({});

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
    axios.get(`http://localhost:8000/review/${user._id}/${reviewid}`, {withCredentials:true})
    .then((res) => {
      setRestaurantName(res.data.restaurantName);
      setPrice(res.data.price);
      setFlavor(res.data.flavor);
      setCrispiness(res.data.crispiness);
      setSize(res.data.size);
      setComment(res.data.comment);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  const submitHandler = (e) => {
    console.log(comments)
    e.preventDefault();
    axios
      .put(`http://localhost:8000/review/${user._id}/${reviewid}`, {
        restaurantName,
        price,
        crispiness,
        flavor,
        size,
        comments,
        createdBy:user._id
      }, {withCredentials:true})
      .then((res) => {
        console.log(res.data)
        navigate(`/dashboard/${reviewid}`);
      })
      .catch ((err) => {
        console.log(err);
        console.log("update handler clientside");
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return(
    <div className='reviewContainer'>
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

      <div className='ReviewBlock'>
        <div className='reviewTitle'>
          <h1>Edit your Tender Review</h1>
        </div>
        <div className='ReviewEdit'>
            <form onSubmit={submitHandler}>

              <div className='reviewHeader'>
                <label>Restaurant Name</label>
                {errors?.restaurantName ? <p>{errors?.restaurantName?.message}</p> : null}
                <input
                  type='text'
                  name='restaurantName'
                  onChange={(e) => setRestaurantName(e.target.value)}
                  value={(restaurantName)}
                />
                <label>Price</label>
                {errors?.price ? <p>{errors?.price?.message}</p>: null}
                <input 
                  type='text'
                  name='price'
                  onChange={(e) => setPrice(e.target.value)}
                  value={(price)}
                />
              </div>

              <div className='RadioButtonGroup'>
                <label>Crispiness</label>
                {errors?.crispiness ? <p>{errors?.crispiness?.message}</p>: null}
                <div className='radioButton'>
                  <input type='radio' name='crispiness' id='crispiness1' value={1} onChange={(e) => setCrispiness(e.target.value)}></input>
                  <label htmlFor='crispiness1'>1</label>
                  <input type='radio' name='crispiness' id='crispiness2' value={2} onChange={(e) => setCrispiness(e.target.value)}></input>
                  <label htmlFor='crispiness2'>2</label>
                  <input type='radio' name='crispiness' id='crispiness3' value={3} onChange={(e) => setCrispiness(e.target.value)}></input>
                  <label htmlFor='crispiness3'>3</label>
                  <input type='radio' name='crispiness' id='crispiness4' value={4} onChange={(e) => setCrispiness(e.target.value)}></input>
                  <label htmlFor='crispiness4'>4</label>
                  <input type='radio' name='crispiness' id='crispiness5' value={5} onChange={(e) => setCrispiness(e.target.value)}></input>
                  <label for='crispiness5'>5</label>
                </div>
              </div>

              <div className='RadioButtonGroup'>
                <label>Flavor</label>
                {errors?.flavor ? <p>{errors?.flavor?.message}</p>: null}
                <div className='radioButton' >
                <input type='radio' name='flavor' id='flavor1' value={1} onChange={(e) => setFlavor(e.target.value)}></input>
                <label htmlFor='flavor1'>1</label>
                <input type='radio' name='flavor' id='flavor2' value={2} onChange={(e) => setFlavor(e.target.value)}></input>
                <label htmlFor='flavor2'>2</label>
                <input type='radio' name='flavor' id='flavor3' value={3} onChange={(e) => setFlavor(e.target.value)}></input>
                <label htmlFor='flavor3'>3</label>
                <input type='radio' name='flavor' id='flavor4' value={4} onChange={(e) => setFlavor(e.target.value)}></input>
                <label htmlFor='flavor4'>4</label>
                <input type='radio' name='flavor' id='flavor5' value={5} onChange={(e) => setFlavor(e.target.value)}></input>
                <label htmlFor='flavor5'>5</label>
                </div>
              </div>

              <div className='RadioButtonGroup' >
                <label>Size</label>
                {errors?.size ? <p>{errors?.size?.message}</p>: null}
                <div className='radioButton'>
                  <input type='radio' name='size' id='size1' value={1} onChange={(e) => setSize(e.target.value)}></input>
                  <label htmlFor='size1'>1</label>
                  <input type='radio' name='size' id='size2' value={2} onChange={(e) => setSize(e.target.value)}></input>
                  <label htmlFor='size2'>2</label>
                  <input type='radio' name='size' id='size3' value={3} onChange={(e) => setSize(e.target.value)}></input>
                  <label htmlFor='size3'>3</label>
                  <input type='radio' name='size' id='size4' value={4} onChange={(e) => setSize(e.target.value)}></input>
                  <label htmlFor='size4'>4</label>
                  <input type='radio' name='size' id='size5' value={5} onChange={(e) => setSize(e.target.value)}></input>
                  <label for='size5'>5</label>
                </div>
              </div>
              <div className='commentContainer'>
                <label>comments</label>
                <input type='text'
                  name='comments'
                  onChange={(e) => setComment(e.target.value)}
                  value={(comments)}
                />
              </div>
              <div>
                <button type='submit'>Edit your Tender</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default EditReview;