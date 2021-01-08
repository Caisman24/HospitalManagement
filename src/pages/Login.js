import React, { Fragment, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import '../static/login.css';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <h2 className="title">Welcome</h2>

            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faUser} />
              </div>

              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" ref={emailRef} />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" ref={passwordRef} />
              </div>
            </div>

            <a href="#">Forgot Password?</a>
            <input
              type="submit"
              className="btn"
              value="Login"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
}
