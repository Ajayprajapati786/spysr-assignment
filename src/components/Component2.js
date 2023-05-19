import React from "react";
import sideimage from '../images/component2.PNG'
import './style.css'

const Component2 = () => {
  return (
    <div className="component2">
      <div className="container">
        <div className="row">
          <div className="col-md-5 first">
            <h1>Access the Deepest BTC Liquidity in Africa</h1>
            <div className="button">
            <button>Trade Now</button>
            </div>
          </div>
          <div className="col-md-7 second">
            <img src={sideimage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
