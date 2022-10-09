import React from "react";
import "./Support.scss";
import arrow from "../../assets/arrow.svg";
import phone from "../../assets/phone.svg";
import phone1 from "../../assets/smallphone.svg";
import email from "../../assets/email.svg";
import email1 from "../../assets/smallemail.svg";

const Support = () => {
  return (
    <div className="support__container">
      <div className="support__con">
        <div className="support__div">
          <div className="support__icon__div">
            <img src={email} alt="" />
            <img src={email1} alt="" className="su__icon" />
          </div>
          <div className="support__text__div">
            <p className="support__p1">Let’s chat by email</p>
            <p className="support__p2">
              For general inquiries, partnerhip enquiries or media enquiries,
              send an email and we will be in touch as soon as possible.
            </p>

            <div className="support__action">
              <img src={arrow} alt="" />
              <p>Send an email</p>
            </div>
          </div>
        </div>
        <div className="support__div">
          <div className="support__icon__div1">
            <img src={phone} alt="" />
            <img src={phone1} alt="" className="su__icon" />
          </div>
          <div className="support__text__div">
            <p className="support__p1">Customer Support</p>
            <p className="support__p2">
              Have questions, complaints or feature requests? Click to open a
              live chat and speak with one of our agents.
            </p>

            <div className="support__action">
              <img src={arrow} alt="" />
              <p>Open live chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
