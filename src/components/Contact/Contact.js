import React from 'react';
import { Link } from 'react-router-dom';
import contactImg from './../../images/Contact us-cuate.svg'

const Contact = () => {
    return (
      <div>
        <div className="container d-flex">
          <div className="contact-img">
            {/* Contact Image  */}
            <img src={contactImg} alt="" width="600px" />
          </div>
          <div className="contact-form w-100 text-capitalize ms-5 p-5">
            {/* Contact Form  */}
            <form>
              <h6 className="color-4 mb-4">
                Please, Fill up these to Contact Us !
              </h6>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="name"
                  className="form-control mb-2 bg-1"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="e-mail"
                  className="form-control mb-2 bg-1"
                />
              </div>
              <div className="input-group">
                <input
                  type="number"
                  placeholder="phone"
                  className="form-control mb-2 bg-1"
                />
              </div>
              <div className="input-group">
                <textarea
                  placeholder="message"
                  className="form-control mb-2 bg-1"
                ></textarea>
              </div>
              {/* Send Button  */}
              <Link to="/send">
                <button className="secondary-button ms-0 mt-3 rounded-pill py-1 px-4 w-100 transition">
                  Send
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;