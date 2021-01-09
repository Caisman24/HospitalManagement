import React, { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import '../static/login.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';

export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    const basicInfo = {
      firstName: firstNameRef.current && firstNameRef.current.value,
      lastName: lastNameRef.current && lastNameRef.current.value,
    };
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        basicInfo
      );
      history.push('/');
    } catch {}

    setLoading(false);
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" required ref={firstNameRef} />
              </Form.Group>
              <Form.Group id="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" required ref={lastNameRef} />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
