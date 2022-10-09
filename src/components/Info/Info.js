import React from "react";
import "./Info.scss";
import heart1 from "../../assets/heart1.svg";
import flash from "../../assets/flash.svg";
import file from "../../assets/file.svg";

const Info = () => {
  return (
    <div className="info__container">
      <div className="info__texts">
        <h1>Need help?</h1>
        <p>Efficient customer service to ensure the quality of our service.</p>
      </div>

      <div className="info__box">
        <div className="info__cards">
          <div className="info__card">
            <div className="icon__div">
              <img src={flash} alt="flash" className="icon" />
            </div>
            <div className="info__text">
              <p className="card__h1">Speed</p>
              <p className="card__p">
                Fast as Lightning, we’ll answer you within a day
              </p>
            </div>
          </div>

          <div className="info__card1">
            <div className="icon__div">
              <img src={heart1} alt="heart" className="icon" />
            </div>
            <div className="info__text">
              <p className="card__h1">Trust</p>
              <p className="card__p">
                We are committed to finding you the ideal swapper
              </p>
            </div>
          </div>

          <div className="info__card2">
            <div className="icon__div">
              <img src={file} alt="flash" className="icon" />
            </div>
            <div className="info__text">
              <p className="card__h1">Availability</p>
              <p className="card__p">We are available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
