import React from "react";
import SwitchBG from "./SwitchBG";
import { useState, useEffect } from "react";

const Header = () => {
  const clicked = async () => {
    console.log("clicked");
  };

  return (
    <div className=" flex items-center justify-between px-10 p-5 ">
      <div className=" font-bold font-mono text-2xl select-none">BlogO</div>
      <div className="flex gap-10">
        <SwitchBG />
        <button onClick={clicked} className="btn btn-outline">
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default Header;
