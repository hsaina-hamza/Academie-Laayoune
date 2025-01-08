import React from 'react';
import dpLaayoune from '../../image/dp-laayoune.png'; 
import '../../Style/css/header.css';

const Header = () => {
  return (
    <div className="row justify-content-center my-3 " id="login">
      <div className="col-12 text-center">
        <img
          src={dpLaayoune}
          alt="DP Laayoune"
          className="top-image img-fluid"
        />
      </div>
      
    </div>
  );
};

export default Header;
