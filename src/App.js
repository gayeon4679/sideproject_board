import './App.css';
import Header from './component/Header';
import Board from './component/Board';
import Login from './component/Login';
import Signup from './component/Signup';
import Post from './component/Post';
import Set from './component/Set';
import Read from './component/Read';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Set" element={<Set />} />
          <Route
            path="/Read"
            element={
              <Read isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
