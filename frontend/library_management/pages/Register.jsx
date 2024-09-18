import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Register() {
  const [Ok, setOk] = useState(false);
  const navigate = useNavigate();
  

  const [RegisterInputs, setRegisterInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileNo: '',
    course: '',
    enrollment: '',
    password: '',
    confirmPassword: ''
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setRegisterInputs({ ...RegisterInputs, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/register', RegisterInputs);
      if (response.data.ok) {
        toast.success('register Successfully!');
        setOk(true);
        console.log('Response from server:', response.data);
        navigate('/login')
      }
    } catch (err) {
      
      toast.error(err.response?.data?.message);
      console.error("something wrong")
    }
  };

  return (
    <>
      {/* <h1>REgister</h1> */}
      <form onSubmit={handleOnSubmit}>
        first Name:<input type="text" name="firstname" value={RegisterInputs.firstname} onChange={handleOnChange} placeholder='enter your first name' />
        <br></br>
        lastname Name:<input type="text" name="lastname" value={RegisterInputs.lastname} onChange={handleOnChange} placeholder='enter your last name' />
        <br></br>
        email id:<input type='email' name='email' value={RegisterInputs.email} onChange={handleOnChange} placeholder='enter your emailid' />
        <br></br>
        mobile no:<input type='tel' name='mobileNo' value={RegisterInputs.mobileNo} onChange={handleOnChange} placeholder=' enter your mobile no' />
        <br></br>
        Enrollment no:<input type='text' name='enrollment' value={RegisterInputs.enrollment} onChange={handleOnChange} placeholder=' enter your enrollment no' />
        <br></br>
        course:
        <select name='course' value={RegisterInputs.course} onChange={handleOnChange}>
          <option>please select your course</option>
          <option value="bba">bba</option>
          <option value="bca">bca</option>
          <option value="bcom">bcom</option>
          <option value="mba">mba</option>
          <option value="mca">mca</option>
          <option value="llb">llb</option>
          <option value="btech">btech</option>
        </select>
        <br></br>
        password:<input type='password' name='password' value={RegisterInputs.password} onChange={handleOnChange} placeholder='enter password' />
        <br>
        </br>
        confirm password:<input type='password' name='confirmPassword' value={RegisterInputs.confirmPassword} onChange={handleOnChange} placeholder='enter password' />
        <br>
        </br>

        <button type='submit' disabled={
          !RegisterInputs.firstname ||
          !RegisterInputs.lastname ||
          !RegisterInputs.email ||
          !RegisterInputs.mobileNo ||
          !RegisterInputs.enrollment ||
          !RegisterInputs.course ||
          !RegisterInputs.password ||
          RegisterInputs.password !== RegisterInputs.confirmPassword
        } >Submit</button>
      </form>

    </>
  );
}

export default Register;