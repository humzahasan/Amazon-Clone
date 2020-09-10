import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import {db, auth} from './firebase';
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  //   const register = (e) => {
  //     e.preventDefault();
  //     auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((auth) => {
  //         console.log(auth);
  //         if (auth) {
  //           history.push('/');
  //         }
  //       })
  //       .catch((error) => alert(error.message));
  //   };
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
        <h1>Sign In</h1>
        <form>
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
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>By Signing-in you agree to all the terms and condition</p>
        <Link to='/register'>
          <button className='login__registerButton'>
            Create Your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
