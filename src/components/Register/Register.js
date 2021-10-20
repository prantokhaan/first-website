import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  
  const {
    user,
    error,
    setError,
    setIsLoading,
    setUser,
    signInUsingGoogle,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleRegister = (e) => {
    e.preventDefault();
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
    return (
      <div className="my-5">
        <div className="text-center w-50 container login-form bg-1">
          <div className="mb-3 mt-5 py-5">
            <h4 className="color-2 mb-4">Create your Account, It's Free!!</h4>
            {/* Email Form  */}
            <form onSubmit={handleRegistration}>
              <input
                onBlur={handleNameChange}
                type="text"
                className="form-control w-50 text-center mx-auto mb-4 box-shadow"
                placeholder="Your Name"
              />
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control w-50 text-center mx-auto box-shadow text-lowercase"
                placeholder="Your E-mail Address"
              />
              {/* Password Form  */}
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control w-50 text-center mx-auto my-4 box-shadow"
                placeholder="Your Password"
              />
              <h6 className="text-primary">{error}</h6>
              <h6>
                Already Registered?{" "}
                <Link to="/login" className="text-decoration-none">
                  {" "}
                  Login Now.{" "}
                </Link>{" "}
              </h6>
              {/* Register Button  */}
              <div className="text-center">
                <button className="primary-button ms-0 mt-2 w-50 py-2  rounded-pill transition box-shadow">
                  Register
                </button>
              </div>
              <br />
              <br />

              {/* Google Sign In  */}
                <button
                  onClick={handleGoogleRegister}
                  className="secondary-button transition box-shadow"
                >
                  <i class="fab fa-google"> </i> Login
                </button>
            </form>
          </div>
          <div className="mb-3"></div>
        </div>
      </div>
    );
};

export default Register;