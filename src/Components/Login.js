import React, { useRef, useState } from "react";
import "./signUp.css";
import { Card, Form, Container, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/Dashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  return (
    <>
      <Container className="Signup">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4 ">Log in</h2>
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

              <button disabled={loading} ClassName="w100" type="submit">
                Log in
              </button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/Signup">Sign up</Link>
        </div>
      </Container>
    </>
  );
}
export default Login;
