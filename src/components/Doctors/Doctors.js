import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../../Hooks/useDoctors';
import './Doctors.css'


const Doctors = () => {
  const [doctors] = useDoctors();

    return (
      <div className="overflow-hidden">
        <h2 className="section-title color-1">Pick your Doctor From here!</h2>
        <div className="row gy-2">
            {doctors.map((doctor) => (
              <Doctor key={doctor.micid} doctor={doctor}></Doctor>
            ))}
          </div>
      </div>
    );
};

export default Doctors;