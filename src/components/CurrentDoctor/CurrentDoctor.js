import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CurrentDoctor = ({currentDoctor}) => {
    console.log(currentDoctor);
    const { photo, name, qualification, specialist, fee, experience, rating, totalRated, available} = currentDoctor;
    return (
      <div className="mt-4 text-center overflow-hidden bg-1">
        <h3 className="mb-5">Doctor's Profile</h3>
        <div className="info row ms-4 ps-4">
          <div className="col-md-3 ms-5">
            <img
              src={photo}
              alt=""
              width="150px"
              height="150px"
              className="rounded-pill"
            />
          </div>
          <div className="col-md-3">
            <h5 className="color-1">{name}</h5>
            <p>{qualification}</p>
            <p className="color-2">{specialist}</p>
            <p className="color-2">
              Total Expierience: <b>{experience}+</b> Years
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Total Rated: <b className="color-1">{totalRated}</b>
            </p>
            <h6 className="color-1">{rating}/5</h6>
            <Rating
              initialRating={rating}
              emptySymbol={<i className="far fa-star color-1"></i>}
              fullSymbol={<i className="fas fa-star color-1"></i>}
              readonly
            />
          </div>
          <div className="text-center mx-auto my-3 p-3 rounded-1 border border-danger border-2 w-50">
            <h6>Colsultation Fee</h6>
            <h4>${fee} + 5% VAT</h4>
            <Link to="/appointment">
              <button className="primary-button ms-0">
                <i className="fas fa-phone-volume"></i> See Doctor Now
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="text-center mx-auto border border-2 border-black w-25 px-3 py-2">
            <h6>Follow Up Fee</h6>
            <p>{fee / 2}$</p>
            <h6>Avalaible at</h6>
            <p>{available}</p>
          </div>
        </div>
      </div>
    );
};

export default CurrentDoctor;