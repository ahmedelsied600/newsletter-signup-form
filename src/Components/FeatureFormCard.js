import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeatureFormCard = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = emailValue.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gim)
    ? true
    : false;
  const isInvalidField = isTouched && !isValid;
  const InputFieldStyle = isInvalidField
    ? "text-primary border-primary bg-primary/[15%]"
    : "";

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isInvalidField) {
      return navigate("/submitted");
    }
  };
  const changedHandler = (e) => {
    setIsTouched(true);
    setEmailValue("");
    setEmailValue(e.target.value);
  };
  return (
    <div id="featureFormCard" className="py-4">
      <div className="flex justify-between">
        <p className="text-[12px] font-bold">Email address</p>
        {isInvalidField && (
          <p className="text-[12px] font-bold text-primary">
            Valid email required
          </p>
        )}
      </div>
      <form method="post" onSubmit={submitHandler}>
        <input
          className={`w-full border-2 border-solid focus:outline-none rounded-md h-[56px] my-3 px-4 hover:cursor-pointer ${InputFieldStyle}`}
          placeholder="email@company.com"
          onChange={changedHandler}
          value={emailValue}
        />
        <button className="btn" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default FeatureFormCard;
