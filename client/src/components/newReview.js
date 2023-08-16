import './new-editReview.css';
import '../components/singleReview.css'
import React, {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";

const CreateReview = ({ user }) => {
  const [restaurantName, setRestaurantName] = useState("");
  const [price, setPrice] = useState("");
  const [flavor, setFlavor] = useState("");
  const [crispiness, setCrispiness] = useState("");
  const [size, setSize] = useState("");
  const [comments, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const Logout = () => {
    axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
      .then((res) => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:8000/review",
      {
        restaurantName,
        price,
        crispiness,
        flavor,
        size,
        comments,
        createdBy: user._id //so next line add author: user.username, update everywhere this touches (model, add, update etc)
      }, {withCredentials:true})
      .then ((res) => {
        console.log(res.data);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        console.log('Catch Create Clientside REVIEW')
        setErrors(err.response.data.errors)
      });
  };

  return(
    <div className='reviewContainer'>
      <div className="ReviewHeader">
        <div className="ReviewInternal">
          <h1>Chicken Tinder</h1>
          <div className="ReviewHeaderRight">
            <button onClick={Logout} className="Logout">logout</button>
            <Link to='/user/settings'>
            <button>To User Settings</button>
            </Link>
            <Link to="/dashboard">
              <button>
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='ReviewBlock'>
        <div className='reviewTitle'>
          <h1>Create your Tender Match</h1>
        </div>

        <div className='Review'>
          <form onSubmit={submitHandler}>

            <div className='reviewHeader'>
              <div>
                <label>Restaurant Name: </label>
                {errors?.restaurantName ? <p>{errors.restaurantName?.message}</p> : null}
                <input
                  type='text'
                  name='restaurantName'
                  onChange={(e) => setRestaurantName(e.target.value)}
                  value={(restaurantName)}
                />
              </div>

              <div>
                <label>Price: </label>
                {errors?.price ? <p>{errors.price.message}</p>: null}
                <input 
                  type='text'
                  name='price'
                  onChange={(e) => setPrice(e.target.value)}
                  value={(price)}
                />
              </div>

            </div>

            <div className='RadioButtonGroup'>
              <label>Crispiness</label>
              {errors?.crispiness ? <p>{errors.crispiness.message}</p>: null}
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
                <label htmlFor='crispiness5'>5</label>
              </div>
            </div>

            <div className='RadioButtonGroup'>
              <label>Flavor</label>
              {errors?.flavor ? <p>{errors.flavor.message}</p>: null}
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
              {errors?.size ? <p>{errors.size.message}</p>: null}
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
                <label htmlFor='size5'>5</label>
              </div>
            </div>

            <div className='commentContainer'>
              <label>Comments: </label>
              <input type='text'
                name='comments'
                onChange={(e) => setComment(e.target.value)}
                value={(comments)}
              />
            </div>
            <button type='submit' id='submitButton'>Add your Tender</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReview;