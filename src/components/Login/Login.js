import React from 'react';
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
  const {
    user,
    error,
    email,
    password,
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    setUser,
    setError,
    setIsLoading,
    processLogin,
    handleLogin
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location?.state?.from || '/home';

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user)
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
      
  }
  
  const handleEmailLogin = (e) => {
    e.preventDefault()
    if(password?.length < 6){
      setError("Please input your password correctly")
    }
    setIsLoading(true);
    processLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setIsLoading(true);
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      }).finally(() => setIsLoading(false));
  }
  
    return (
      <div className="my-5">
        <div className="text-center w-50 container login-form bg-1">
          <div className="mb-3 mt-5 py-5">
            <h4 className="color-2 mb-4">Please Login</h4>
            {/* Email Form  */}
            <form onSubmit={handleEmailLogin}>
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control w-50 text-center mx-auto box-shadow text-lowercase"
                placeholder="your e-mail address"
              />
              {/* Password Form  */}
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control w-50 text-center mx-auto my-4 box-shadow"
                placeholder="your password"
              />
              <h6 className="text-primary">{error}</h6>
              <h6>
                New User?{" "}
                <Link to="/register" className="text-decoration-none">
                  {" "}
                  Register.{" "}
                </Link>{" "}
              </h6>
              {/* Login Button  */}
              <div className="text-center">
                <button className="primary-button ms-0 mt-2 w-50 py-2  rounded-pill transition box-shadow">
                  Login
                </button>
              </div>
              <br />
              <br />

              {/* Google Sign In  */}
              <button
                onClick={handleGoogleLogin}
                className="secondary-button transition box-shadow"
              >
                <i className="fab fa-google"> </i> Login
              </button>
            </form>
          </div>
          <div className="mb-3"></div>
        </div>
      </div>
    );
};

export default Login;