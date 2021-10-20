import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
          <div className="text-center">
            <div className="spinner-border mx-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
    }
    return (
        <Route
        {...rest}
        render={({location}) => user.email || user.displayName ? children : <Redirect
        to={{
            pathname: "/login",
            state: {from: location}
        }}
        ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;