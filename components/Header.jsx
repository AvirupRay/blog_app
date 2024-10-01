"use client";
import React from "react";
import SwitchBG from "./SwitchBG";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const clicked = async () => {
    console.log("clicked");
  };

  return (
    <div className=" flex items-center justify-between px-10 p-5 ">
      <div className=" font-bold font-mono text-2xl select-none">Blog0</div>
      <div className="flex gap-10">
        <SwitchBG />
        <Link href={"/page"} className="btn btn-outline">
          Add Blog
        </Link>
      </div>
    </div>
  );
};

export default Header;
