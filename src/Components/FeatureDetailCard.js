import React from "react";
import listIcon from "../assets/images/icon-list.svg";

const FeatureDetailCard = () => {
  const features = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <div id="featureDetailCard" className="py-4">
      <h1>Stay updated!</h1>
      <p className="font-[700] py-4">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <div id="featureList">
        {features.map((feature, ind) => (
          <div id="feature" className="flex py-1" key={"o" + ind}>
            <img src={listIcon} width="21px" alt="success lost" />
            <p className="px-4">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDetailCard;
