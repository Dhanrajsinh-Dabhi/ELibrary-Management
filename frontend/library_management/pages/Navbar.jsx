import { useState } from 'react';
import '../src/App.css'

import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
import { useAuth } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NavBar() {
  const [count, setCount] = useState(0);
  const { authUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('JWT_Token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>Aboutus</Link>
            </li>
            <li>
              <Link to='/contact'>Contactus</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/profile'>profile</Link>
            </li>
          </ul>
        </nav> */}



      {/* <!-- Navbar with Logo --> */}
      <nav className="navbar  navbar-expand-lg navbar-dark ">
        <div className="container">
          {/* <!-- Navbar Brand with Logo --> */}
          <a className="navbar-brand" href="/">
            <img src="images/gls_logo.jpg" alt="LibrarySystem Logo" className="logo" />
            LibrarySystem
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to='/admin'>admin</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="index.html">Home</a>
                  */}
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="about.html">About Us</a> */}
                <Link to='/about'>Aboutus</Link>
              </li>
              <li>
                <Link to='/books'>Ourbooks</Link>
              </li>
              {/* <li className="nav-item">
                  <a className="nav-link" href="books.html">Our Books</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="library.html">Library</a>
                </li> */}
              <li className="nav-item">
                {/* <a className="nav-link" href="contact.html">Contact</a> */}
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/profile'>userProfile</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link btn btn-light text-primary"  href="login.html">Login</a> */}
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>SignUp</Link>
              </li>
              {isLoggedIn ? (
                <><button className="btn btn-outline-danger" onClick={handleLogout}>
                  Logout
                </button>
                </>
              ) : (
                <>
                  <Link className="btn btn-outline-primary" to="/login">
                    Login
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>






    </>
  )
}

export default NavBar;
