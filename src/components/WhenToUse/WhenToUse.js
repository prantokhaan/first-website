import React from 'react';
import './WhenToUse.css';
import painImg from '../../images/head_pain.png';

const WhenToUse = () => {
    return (
      <div className="container py-3 bg-light box-shadow">
        <h2 className="section-title">
          When to Use <span className="color-1">Minute Clinic</span>
        </h2>
        <div className="two-grid justify-around">
          <div className="when-img">
            <img src={painImg} alt="" />
          </div>
          <div className="mt-5">
            <div className="when-items">
              <h4>Common health issue</h4>
              <p>
                Ask anything you would normally ask your GP. You can have an
                instant video with one of our GPs via a digital consultation
                from anywhere, at any time of day.
              </p>
            </div>
            <div className="when-items">
              <h4>Specialist advice</h4>
              <p>
                Sometimes it’s helpful to see a specialist when you want. And
                get educational advice, pre- screening, monitoring and
                follow-ups. For maternal and infant health care, chronic
                diseases such as diabetes, or other conditions.
              </p>
            </div>
            <div className="when-items">
              <h4>Mental health and wellbeing</h4>
              <p>
                In a fast paced world, it is important to monitor and protect
                your mental health and wellbeing. Doctors can help you stay
                healthy whether you have symptoms at home or in your workplace
                of stress, smoking, anxiety, bereavement or depression.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhenToUse;