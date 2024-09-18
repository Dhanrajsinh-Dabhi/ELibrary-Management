import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Context/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import '../src/App.css'

import toast, { Toaster } from 'react-hot-toast';
// import { response } from 'express';


function Login() {
  const { authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  const [token, setToken] = useState('');
  const [LoginInputs, setLoginInputs] = useState(
    {
      email: '',
      password: ''
    }
  );


  //   useEffect(() => {
  //     const token = localStorage.getItem('JWT_Token');
  //     if (token) {
  //         axios.get('http://localhost:2000/user/auth', {
  //             headers: { Authorization: `Bearer ${token}` },
  //         })
  //             .then((response) => {
  //                 // setAuthUser(response.data);
  //                 setIsLoggedIn(true);
  //                 console.log("login successfully");
  //             })
  //             .catch((error) => {
  //                 console.error(error);
  //                 // localStorage.removeItem('JWT_Token');
  //             });
  //     }
  // }, []);
  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      axios.get('http://localhost:3000/user/auth', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          if (response.data.ok) {
            setAuthUser(response.data.user);
            setIsLoggedIn(true);
            console.log("login successfully", response.data.user);

            navigate('/');
          } else {
            console.log("authentication failed");
          }
        })
        .catch((error) => {
          console.error(error);
          // localStorage.removeItem('JWT_Token');
        });
    }
  }, []);



  const handlOnChange = (e) => {
    setLoginInputs({ ...LoginInputs, [e.target.name]: e.target.value })


  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (LoginInputs.password.length < 8) {
      alert('Please fill in all fields and ensure password is at least 8 characters and matches confirm password');
      return;
    }
    try {


      const response = await axios.post('http://localhost:3000/user/login', LoginInputs, {
        headers: { 'Content-Type': 'application/json' },
      });



      setToken(response.data.token);
      localStorage.setItem('jwt_token', response.data.token);
      console.log(response.data.token);

      setAuthUser(LoginInputs.email);
      setIsLoggedIn(true);

      if (response.data.ok) {
        toast.success('Login Successfully!');
        console.log(response.data);
        navigate('/');
      }
      else {
        toast.error(response.data.message);
      }
    }
    catch (err) {
      toast.error("something happend wrong");
      console.error(err);
    }



  }
  return (
    <>


      <form onSubmit={handleOnSubmit}>




        email:<input type='email' name='email' value={LoginInputs.email} onChange={handlOnChange} placeholder=' enter email-id' />
        <br></br>
        password:<input type='password' name='password' value={LoginInputs.password} onChange={handlOnChange} placeholder='enter password' />

        <br>
        </br>


        <input type='submit' value="Login" disabled={!LoginInputs.email || !LoginInputs.password} />
      </form>

    </>
  )
}

export default Login;