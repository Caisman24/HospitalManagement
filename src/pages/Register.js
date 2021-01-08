import React, { useState, Fragment, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import '../static/login.css';

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to create an account');
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
                <input
                  type="text"
                  className="input"
                  ref={emailRef}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  ref={passwordRef}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="input-div repass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  ref={passwordConfirmRef}
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <input
              type="submit"
              className="btn"
              value="Register"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
}
