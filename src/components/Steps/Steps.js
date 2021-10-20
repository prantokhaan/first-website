import React from 'react';
import stepImg from '../../images/Insurance-pana.svg';
import './Steps.css'

const Steps = () => {
    return (
      <div className="container py-3 bg-light box-shadow mt-3">
        <h2 className="section-title">
          <span className="color-1">Three</span> Easy Steps !!!
        </h2>
        <div className="two-grid">
          <div className="step-detail p-3">
            <div className="step-items d-flex p-3">
              <div className="step-icon me-3">
                <i className="fas fa-search"></i>
              </div>
              <div className="step-info">
                <h4>Search your Doctor!</h4>
                <p>
                  Search your doctor by specialty or doctor name. Choose the
                  right doctor for you by viewing their profile, rating &
                  experience.
                </p>
              </div>
            </div>
            <div className="step-items d-flex p-3">
              <div className="step-icon me-3">
                <i className="fas fa-phone-square-alt"></i>
              </div>
              <div className="step-info">
                <h4>Consult live on VideoCall</h4>
                <p>
                  Once you pay the required doctor fee, you will be joined to
                  the queue. Doctor will make a secured video call to do the
                  consultation.
                </p>
              </div>
            </div>
            <div className="step-items d-flex p-3">
              <div className="step-icon me-3">
                <i className="fas fa-paste"></i>
              </div>
              <div className="step-info">
                <h4>Instant Prescription</h4>
                <p>
                  Once the video consultation is complete, the doctor will
                  upload the prescription. You can download the prescription
                  immediately or later.
                </p>
              </div>
            </div>
          </div>
          <div className="step-img">
            <img src={stepImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Steps;