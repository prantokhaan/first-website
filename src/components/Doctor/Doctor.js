import React from 'react';
import Rating from 'react-rating';
import useDoctor from "../../Hooks/useDoctors";
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({doctor}) => {
    const {name, photo, qualification, specialist, fee, rating, totalRated, micid} = doctor;
    return (
      <div className="col-md-4">
        <div className="row p-3 ms-1 mb-1 doctor">
          <div className="col-md-4 col-sm-12 doctor-img gx-1">
            <img src={photo} alt="" />
          </div>
          <div className="col-md-8 col-sm-12 doctor-info mt-2">
            <h5>{name}</h5>
            <p className="color-2 mt-3">
              {specialist} ({qualification})
            </p>

            <h2 className="color-1">${fee}</h2>
          </div>
          <div className="extra mt-3 justify-around row">
            <div className="col-md-6">
              <Link to={`/doctor/${micid}`}>
                <button className="primary-button ms-0">
                  <i className="fas fa-phone-volume"></i> Connect
                </button>
              </Link>
            </div>
            <div className="col-md-6 color-2 mt-2">
              <div className="ms-4">
                <Rating
                  initialRating={rating}
                  emptySymbol={<i className="far fa-star"></i>}
                  fullSymbol={<i className="fas fa-star"></i>}
                  readonly
                />
                <span> ({totalRated})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Doctor;