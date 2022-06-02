import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/displays/Home';
import Profile from './components/displays/Profile';
import SignIn from './components/displays/SignIn';
import Signup from './components/displays/Signup';
import UserProfile from './components/displays/UserProfile';
import CreatePost from './components/displays/CreatePost';


function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/search" element={<Profile />} /> */}
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
    
  );
}

export default App;
