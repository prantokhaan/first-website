import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/Online Doctor-pana.svg'

const About = () => {
    return (
      <div>
        <div className="my-3 container text-center">
          <div className="section-title text-center mb-3">
            <h2>
              About <span className="color-1">Us</span>
            </h2>
          </div>
          <div>
            <div className="about-img ms-2">
              <img src={aboutImg} alt="" width="500px" />
            </div>
            <br />
            {/* Info of Aimers  */}
            <div className="mt-5 ms-5 p-2">
              <h6 className="mt-4 lh-lg color-4">
                minute clinic is an online medical service targeting emerging markets
                that are rapidly digitising. Our mission is to improve the
                health and wellbeing of the populations we serve. We have
                developed accessible and affordable telehealth services that
                aims to support the public health system, research and clinical
                trials. minute clinic offers on-demand GP and specialist consultations
                with verified and certified doctors, online prescriptions,
                medicine delivery, pathology/ diagnostics tests, all while
                building valuable Electronic Health Records. minute clinic is
                vertically integrated with pharmacies/ medicine delivery
                suppliers, labs/ diagnostics centres, and payment providers for
                an end-to-end digital health experience. minute clinic systematically
                focuses on expanding access to affordable healthcare services to
                all. We promise to improve our solutions continuously through
                our scalable technology and data analytics capabilities. Our
                passionate team is committed to excellence and work extremely
                hard to ensure we make a positive contribution to the healthcare
                of the future.
              </h6>
              <Link className="mx-auto" to="/doctors">
                <button className="primary-button rounded-pill py-2 px-4 mt-3 mx-auto">
                  Find Doctor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;