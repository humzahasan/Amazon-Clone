import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import {db, auth} from './firebase';
function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          auth.user.updateProfile({displayName: name});
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp'
          alt='logo'
          className='login__logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign Up</h1>
        <form>
          <h5>Name</h5>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className='login__signInButton'
            onClick={register}
          >
            Sign Up
          </button>
        </form>

        <p>By Signing-in you agree to all the terms and condition</p>
        <Link to='/login'>
          <button className='login__registerButton'>
            {' '}
            Already have an Account? Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
