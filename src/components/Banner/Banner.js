import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
      <div className="banner">
        <div className="banner-info container py-5">
          <h2 className="py-3">
            Video <span className="color-1">Consultation</span> from <br />
            Best <span className="color-1">Doctors</span> Online
          </h2>
          <h6 className="py-2">
            You don't need to wait physically hours in hospital to see a doctor.
            You can join the online queue immediately, while you can continue
            doing other tasks at home or office. <br />
            You have the Access, hundreds of certified and trusted doctors and
            specialists at anytime from anywhere.
          </h6>
          <div className="mt-3">
            <Link to="/doctors">
              <button className="primary-button ms-0 p-3">
                <i class="fas fa-search-plus"></i> Find a Doctor Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;