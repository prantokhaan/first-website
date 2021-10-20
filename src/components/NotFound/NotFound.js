import React from 'react';
import notFoundImg from './../../images/404 Error Page not Found with people connecting a plug-bro.svg'

const NotFound = () => {
    return (
      <div className="text-center">
        <img src={notFoundImg} alt="" height="600px" width="600px" />
      </div>
    );
};

export default NotFound;