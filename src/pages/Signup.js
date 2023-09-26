import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  let navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create the request body
    const requestBody = {
      firstName,
      secondName,
      password,
      confirmPassword,
      email,
    };

    try {
      // Make the API request
      const response = await fetch('http://localhost:2000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Handle the response
      if (response.ok) {
        // Signup successful
        const responseData = await response.json();
        console.log('Signup successful:', responseData);
        navigate("/Login")
      } else {
        // Signup failed
        const errorData = await response.json();
        console.log('Signup failed:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">Sign Up</h2>
                <p className="text-center mb-3">Join us in shopping!!</p>
                <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label htmlFor="name">
                <strong>FirstName</strong>
            </label>
            <input
              type="text"
              placeholder="firstname"
              value={firstName}
              className="form-control rounded-0"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="name">
                <strong>LastName</strong>
            </label>
            <input
              type="text"
              placeholder="lastname"
              value={secondName}
              className="form-control rounded-0"
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter email here ..."
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label mb-3">
                      Enter Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="enter password here..."
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label mb-3"
                    >
                      Confirm Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="rewrite password here..."
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p>Have an account?</p>
                    <Link to="/login" className="form-link">
                      Log In
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
