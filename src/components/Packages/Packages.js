import React from 'react';
import './Packages.css';

const Packages = () => {
    return (
      <div className="text-center">
        <h2 className="section-title">
          You can purchase any of our <span className="color-1">plan</span>.
        </h2>
        <div className="row package-item w-75 mx-auto mt-5">
          <div className="col-md-4 mt-5 pt-4">
            <h2 className="color-2">Standard</h2>
          </div>
          <div className="col-md-8 mt-2">
            <h4 className="mb-3">Standard Plan</h4>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 50 Calls can be made.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 50% off in Follow up Fee.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> Dowload Prescription.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 20% off on Ambulance Service.
            </h6>
            <h4 className="color-1">$200</h4>
          </div>
          <button className="primary-button w-25 mx-auto mb-3">Subscribe</button>
        </div>
        <div className="row package-item w-75 mx-auto mt-5">
          <div className="col-md-4 mt-5 pt-4">
            <h2 className="color-2">Premium</h2>
          </div>
          <div className="col-md-8 mt-2">
            <h4 className="mb-3">Premium Plan</h4>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 100 Calls can be made.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 75% off in Follow up Fee.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> Dowload Prescription.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 30% off on Ambulance Service.
            </h6>
            <h4 className="color-1">$300</h4>
          </div>
          <button className="primary-button w-25 mx-auto mb-3">Subscribe</button>
        </div>
        <div className="row package-item w-75 mx-auto mt-5">
          <div className="col-md-4 mt-5 pt-4">
            <h2 className="color-2">Master</h2>
          </div>
          <div className="col-md-8 mt-2">
            <h4 className="mb-3">Master Plan</h4>
            <h6 className="color-2">
              <i className="fas fa-check"></i> Unlimited Calls can be made (30 days).
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 100% off in Follow up Fee.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> Dowload Prescription.
            </h6>
            <h6 className="color-2">
              <i className="fas fa-check"></i> 60% off on Ambulance Service.
            </h6>
            <h4 className="color-1">$500</h4>
          </div>
          <button className="primary-button w-25 mx-auto mb-3">Subscribe</button>
        </div>
      </div>
    );
};

export default Packages;