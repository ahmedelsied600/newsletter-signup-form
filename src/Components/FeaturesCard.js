import React from "react";
import FeatureFormCard from "./FeatureFormCard";
import FeatureDetailCard from "./FeatureDetailCard";
// import ColorPallete from "./ColorPallete";

const FeaturesCard = () => {
  return (
    <div id="Info" className="flex flex-col justify-center p-6">
      <FeatureDetailCard />
      <FeatureFormCard />
    </div>
  );
};

export default FeaturesCard;
