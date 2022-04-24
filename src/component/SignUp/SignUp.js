import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [confirmPassword, setConfirmPassword] =useState('');
  const [error, setError] =useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

  const handleEmailBlur = event =>{
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value);
  }
  if(user){
      navigate('/shop');
  }
  const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value)
  }
  const handleCreateUser = event =>{
    event.preventDefault();
    if(password !== confirmPassword){
      setError('Your Password did not match')
      return;
    }
    if(password <6){
      setError('Password must be 6 characters or longer')
    }
    createUserWithEmailAndPassword(email, password)
   
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleCreateUser}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
          onBlur={handleConfirmPasswordBlur}
            type="password"
            name="confirm-password"
            id=""
            placeholder="Confirm Your Password"
            required
          />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <input className="form-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account?
        <Link to="/login" className="form-link">Login</Link>
      </p>
      <div className="hr-or">
        <div className="hr-line">
          <hr />
        </div>
        <p>or</p>
        <div className="hr-line">
          <hr />
        </div>
      </div>

      <button className="google-btn">
        <FcGoogle className="icon" />
        <p>Continue with Google</p>
      </button>
    </div>
  );
};

export default SignUp;
