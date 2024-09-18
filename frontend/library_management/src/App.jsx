import { useState } from 'react'
import NavBar from '../pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/User/Home'
import About from '../pages/User/About'
import UserProfile from '../pages/User/UserProfile'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ContactUs from '../pages/ContactUs'
import { useAuth } from '../Context/AuthProvider'
import UpdateUserProfile from '../pages/User/UpdateUserProfile'
import Footer from '../pages/Footer';

import { useNavigate, Link, Navigate } from 'react-router-dom';
import OurBooks from '../pages/User/OurBooks'
import User_Profile from '../pages/User/UserProfile'

import toast, { Toaster } from 'react-hot-toast';
import Admin from '../pages/Admin/Admin'



function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;

};

function PublicRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/" replace /> : children;
}


function App() {
  const navigate = useNavigate();

  return (
    <>
      <div >

        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route exact path='/about' element={<PrivateRoute><About /></PrivateRoute>} />
          <Route exact path='/contact' element={<PrivateRoute><ContactUs /></PrivateRoute>} />
          <Route exact path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route exact path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route exact path='/profile' element={<PrivateRoute><User_Profile /></PrivateRoute>} />
          <Route exact path='/profile/update' element={<PrivateRoute><UpdateUserProfile /></PrivateRoute>} />
          <Route exact path='/books' element={<PrivateRoute><OurBooks /></PrivateRoute>} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
