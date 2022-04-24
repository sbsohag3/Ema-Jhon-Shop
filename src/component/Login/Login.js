import { FcGoogle } from 'react-icons/fc';
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleEmailBlur = event =>{
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value);
  }
  if(user){
      navigate(from, {replace:true})
  }
  const handleUserSignIn = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleUserSignIn}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder="Enter Your Email" required/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder="Enter Your Password"required/>
        </div>
        <p style={{color:'red'}}>{error?.message}</p>
        {
          loading && <p>Loading...</p>
        }
        <input className="form-submit" type="submit" value="Login" required/>
      </form>
      <p>
        New to Ema-John? <Link to='/signup' className="form-link">Create an account</Link>
      </p>
     <div className="hr-or">
     <div className="hr-line"><hr /></div>
      <p>or</p>
      <div className="hr-line"><hr /></div>
     </div>
     
       <button className='google-btn'>
       <FcGoogle className='icon'/>
       <p>Continue with Google</p>
       </button>
    </div>
  );
};

export default Login;
