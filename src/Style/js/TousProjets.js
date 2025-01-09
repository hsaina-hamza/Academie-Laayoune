import React from 'react';
import { Link } from 'react-router-dom';
// import '../css/Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="description">
        <h1>Item 02</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat.
          Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.
        </p>
      </div>
      <div className="row">
        <ul>
          <Link to="#" className="close"></Link>
          <li>
            <Link to="#item02">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="#item02">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="#item02">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link className="image" href="#item01">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link className="image" href="#item02">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link className="image" href="#item01">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link className="image" href="#item01">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link className="image" href="#item01">
              <img
                src=""
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
      <div id="item01" className="port">
        <div className="row">
          <div className="description">
            <h1>Item 01</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat.
              Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.
            </p>
          </div>
          <img
            src=""
            alt=""
          />
        </div>
      </div>

      <div id="item02" className="port">
        <div className="row">

          <img
            src=""
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
