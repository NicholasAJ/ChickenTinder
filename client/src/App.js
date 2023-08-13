import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/dashboard' element={<Dashboard user={user}/>}/>
          {/* will need path for see single review - /tender/review */}
          {/* will need path for edit/update review */}
          {/* will need path for edit/update user */}
          {/* will need path for delete tender review */}
          {/* will need path for delete user */}

          {/* select from routes below for the pathways */}

          {/* <Route path="/chickentinder/dash" element={<DisplayAll/>}/>
          <Route path="/chickentinder/edit/:id" element={<EditReview/>}/>
          <Route path="/chickentinder/login" element={<LoginUser/>}/>
          <Route path="/chickentinder/new" element={<CreateReview/>}/>
          <Route path="/chickentinder/create" element={<CreateUser/>}/> 
          <Route path="/chickentinder/tender/:id" element={<ViewReview/>}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
