import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Header from './components/header';
import CreateReview from './components/newReview'
import EditReview from './components/editReview';
import ViewReview from './components/singleReview'
import UserSettings from './components/UserSettings'

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <div>
      {/* <Header/> */}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/dashboard' element={<Dashboard user={user}/>}/>
          <Route path='/newtender' element={<CreateReview user={user}/>}/>
          {/* will need path for edit/update review */}
          <Route path='/edittender/:reviewid' element={<EditReview user={user}/>}/>
          {/* will need path for see single review - /tender/review */}
          <Route path='/dashboard/:reviewid' element={<ViewReview user={user}/>}/>
          {/* will need path for edit/update user */}
          <Route path='/user/settings' element={<UserSettings user={user}/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
