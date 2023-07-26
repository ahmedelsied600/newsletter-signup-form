import React from "react";
import { Outlet } from "react-router-dom";
const Container = () => {
  return (
    <div className="w-screen min-h-screen flex lg:justify-center items-between ">
      <Outlet />
    </div>
  );
};

export default Container;
