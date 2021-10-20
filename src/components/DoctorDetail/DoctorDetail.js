import React from 'react';
import { useParams } from 'react-router';
import useDoctors from '../../Hooks/useDoctors';
import Appointment from '../Appointment/Appointment';
import CurrentDoctor from '../CurrentDoctor/CurrentDoctor';

const DoctorDetail = () => {
    const {doctorId} = useParams();
    const [doctors] = useDoctors();
    let currentDoctor = [];
    if(doctors.length){
        const takeDoctor = doctors.find(doctor => doctor.micid === parseInt(doctorId))
        currentDoctor.push(takeDoctor);
    }
    return (
      <div>
        <div>
            {
                currentDoctor?.map(currentDoctor => <CurrentDoctor
                key={currentDoctor.micid}
                currentDoctor={currentDoctor}
                ></CurrentDoctor>)
            }
        </div>
      </div>
    );
};

export default DoctorDetail;