import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          {/* will need path for see single review - /tender/review */}
          {/* will need path for edit/update review */}
          {/* will need path for edit/update user */}
          {/* will need path for delete tender review */}
          {/* will need path for delete user */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
