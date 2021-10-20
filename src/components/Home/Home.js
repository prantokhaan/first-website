import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Steps from '../Steps/Steps';
import WhenToUse from '../WhenToUse/WhenToUse';

const Home = () => {
    return (
        <div className="bg-1 overflow-hidden">
            <Banner />
            <WhenToUse />
            <Steps />
            <Faq />
        </div>
    );
};

export default Home;