import React from "react";
import { useNavigate } from "react-router-dom";
import successIcon from "../assets/images/icon-success.svg";
const SuccessfullySubmittedPage = () => {
  const navigate = useNavigate();
  return (
    <div
      id="thanksCard"
      className="self-center relative w-screen h-screen lg:w-[504px] lg:h-[520px] lg:w-[376px] p-6 flex flex-col"
    >
      <div className="h-4/5 flex justify-center items-center">
        <div>
          <img src={successIcon} alt="dont load success" />
          <h1 className="py-[20px]">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <strong>ash@loremcompany.com</strong>. Please open it and click the
            button inside to confirm your subscription
          </p>
        </div>
      </div>
      <div
        id="successAction"
        className="h-1/5 flex justify-center items-center"
      >
        <button
          className=" btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SuccessfullySubmittedPage;
