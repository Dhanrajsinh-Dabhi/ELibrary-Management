import './UserProfile.css'; // Assuming you create this CSS file for styling
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';

function User_Profile() {
  let { params } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileNo: '',
    course: '',
    enrollment: '',
    password: '',
    userID: ''
  });
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const [current_User, setCurrent_User] = useState({
    email: '',
    role: '' // Add role to the user state
  });


  const fetchUser = async () => {
    try {

      const token = localStorage.getItem('jwt_token');
      const userEmail = localStorage.getItem('user_email');
      const userRole = localStorage.getItem('user_role');

      if (token) {
        // Set the user state with the retrieved email and role
        setCurrent_User(prevUser => ({
          ...prevUser,
          email: userEmail,
          role: userRole
        }));
      }

    }
    catch (err) {
      console.error('Error fetching data:', err);

    }
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      axios
        .get('http://localhost:3000/user/auth', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.ok) {
            const user = response.data.user;
            setUser({
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              mobileNo: user.mobileNo,
              course: user.course,
              enrollment: user.enrollment,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
              userID: user._id,
            });
          } else {
            console.log('Authentication failed');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchUser();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/profile/update', { state: { user,current_User } });
  };

  return (
    <div className="profile-container">
      <h3 className="profile-header">User Profile</h3>
      <div className="profile-card">
        <form className="profile-form">
          <p className="profile-field">
            <span className="profile-label">First Name:</span>{' '}
            <span className="profile-value">{user.firstname}</span>
          </p>
          <p className="profile-field">
            <span className="profile-label">Last Name:</span>{' '}
            <span className="profile-value">{user.lastname}</span>
          </p>
          <p className="profile-field">
            <span className="profile-label">Email:</span>{' '}
            <span className="profile-value">{user.email}</span>
          </p>
          <p className="profile-field">
            <span className="profile-label">Mobile No:</span>{' '}
            <span className="profile-value">{user.mobileNo}</span>
          </p>


          {/* <p className="profile-field">
            <span className="profile-label">Enrollment No:</span>{' '}
            <span className="profile-value">{user.enrollment}</span>
          </p>
          <p className="profile-field">
            <span className="profile-label">Course:</span>{' '}
            <span className="profile-value">{user.course}</span>
          </p> */}
          <p className="profile-field">
            <span className="profile-label">Created At:</span>{' '}
            <span className="profile-value">{user.createdAt}</span>
          </p>
          <p className="profile-field">
            <span className="profile-label">Updated At:</span>{' '}
            <span className="profile-value">{user.updatedAt}</span>
          </p>
          {/* // <p className="profile-field">
          //   <span className="profile-label">User ID:</span>{' '}
          //   <span className="profile-value">{user.userID}</span>
          // </p> */}
          <button className="profile-button" onClick={handleClick}>
            Update Profile
          </button>


        </form>
      </div>
    </div>
  );
}

export default User_Profile;