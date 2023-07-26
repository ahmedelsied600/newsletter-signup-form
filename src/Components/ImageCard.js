import React from "react";
import ImageMobile from "../assets/images/illustration-sign-up-mobile.svg";
import ImageDestop from "../assets/images/illustration-sign-up-desktop.svg";
const ImageCard = () => {
  const image = window.screen.width <= 375 ? ImageMobile : ImageDestop;
  return (
    <div>
      <img
        src={image}
        className="box-border h-full lg:p-6 object-cover"
        alt="main lost"
      />
    </div>
  );
};

export default ImageCard;
