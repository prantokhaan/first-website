import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  let verified = "unverified";

  const verifiedStatus = () => {
    if (user.emailVerified) {
      verified = "verified";
    }
  };
  let phone = " ";
  const phoneNumber = () => {
    if (user.phoneNumber === null) {
      phone = "No Phone Number";
    }
  };
  verifiedStatus();
  phoneNumber();
  
  return (
    <div>
      <div>
        <h2 className="text-center my-3 py-2">
          Welcome{" "}
          <span className="color-2 text-capitalize">{user.displayName}</span>
        </h2>
        <div className="text-center">
          <img
            className="rounded-pill"
            src={user.photoURL}
            alt={user.displayName}
            width="100px"
            height="100px"
          />
        </div>
        <div className="row text-center">
          <div className="static col-6">
            <h6>User ID :</h6>
            <hr />
            <h6>Email :</h6>
            <hr />
            <h6>Verified Status :</h6>
            <hr />
            <h6>Phone Number :</h6>
            <hr />
          </div>
          <div className="info col-6">
            <h6>{user?.uid}</h6>
            <hr />
            {!user?.email ? <h6>no email found</h6> : <h6>{user?.email}</h6>}
            <hr />
            <h6>{verified}</h6>
            <hr />
            <h6>{phone}</h6>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;