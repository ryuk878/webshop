import React, { useRef, useState } from "react";
import "./signUp.css";
import { Card, Form, Container, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setLoading(true);
      setError("");

      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/Dashboard");
    } catch {
      setError("Failed to sign up");
    }

    setLoading(false);
  }
  return (
    <>
      <Container className="Signup">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4 ">Sign up</h2>
            {currentUser?.email}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="Password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <button disabled={loading} ClassName="w100" type="submit">
                Sign up
              </button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/Login">Log in</Link>
        </div>
      </Container>
    </>
  );
}
export default SignUp;
