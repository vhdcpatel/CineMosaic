import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../../store/Slices/authSlice';
import './authStyles.css';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp({ email, password }));
    } else {
      dispatch(signIn({ email, password }));
    }
  };

  useEffect(() => {
    if (auth.status === 'succeeded') {
      navigate('/');
    }
  }, [auth.status, navigate]);

  console.log(auth);

  return (
    <div className='auth-form-ctn'>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        {auth.status === 'loading' && <p className='statusMsg'>Loading...</p>}
        {auth.error && <p className='errorMsg'>{auth.error}</p>}
      </form>
      <p
        className="toggle-link"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

export default Auth;
