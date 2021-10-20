import React from 'react';

const Faq = () => {
    return (
      <div className="container py-4 my-2 bg-light box-shadow mt-3">
        <h2 className="section-title">
          Have Any <span className="color-1">Question ?</span>
        </h2>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What is Minute Clinic?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                Minute Clinic is an online based medical consultation service
                where doctors consult patients on video calls using Minute Clinic app
                or website. The service is available 24/7 from anywhere.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                What do we treat?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                Common health issue Ask anything you would normally ask your GP.
                You can have an instant video with one of our GPs via a digital
                consultation from anywhere, at any time of day. Specialist
                advice Sometimes it’s helpful to see a specialist when you want.
                And get educational advice, pre-screening, monitoring and
                follow-ups. For maternal and infant health care, chronic
                diseases such as diabetes, or other conditions, Minute Clinic can help
                you to connect with the right specialist doctor and to stay
                healthy. More than 20 different specialities are available on
                Minute Clinic. Mental health and wellbeing In a fast paced world, it
                is important to monitor and protect your mental health and
                wellbeing. Doctors can help you stay healthy whether you have
                symptoms at home or in your workplace of stress, smoking,
                anxiety, bereavement or depression.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                How does it work?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                Patients can register on our app and are able to take
                consultation from our verified doctors. Consultation is
                available for the app user and their family members. It works in
                3 steps: - Search for your doctor by speciality and make payment
                online and pay the fees required by the doctor - Doctor makes a
                video call to do the consultation - Doctor uploads prescription
                and you download it
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Who provides consultation on Minute Clinic?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body">
                Only certified MBBS doctors can provide consultation via the
                Minute Clinic app.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Are the registered doctors verified?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div className="accordion-body">
                Yes, all our panel of doctors are verified. We verify their
                registration with BMDC, we also check doctors national id /
                passport with selfie to make sure the qualified doctors are
                getting registered.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;