import React from 'react';
import dpLaayoune from '../../image/dp-laayoune.png'; 
// import '../css/header';

const Header = () => {
  return (
    <div className="row justify-content-center my-3 ">
      <div className="col-12 text-center">
        <img
          src={dpLaayoune}
          alt="DP Laayoune"
          className="top-image img-fluid"
          style={{marginBottom: '200px'}}
        />
      </div>
    </div>
  );
};

export default Header;
