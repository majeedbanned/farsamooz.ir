"use client";
import React, { useEffect, useState } from "react";
import SiteLogo from "../SiteLogo";
import NavMenu from "../NavMenu";
import Profile from "../Profile";

type Props = {};

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleSchroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleSchroll);

    return () => {
      window.removeEventListener("scroll", handleSchroll);
    };
  });

  return (
    <div
      className={`z-30 justify-between  items-center  ${
        sticky
          ? "fixed top-0 bg-white mt-0 z-[999] shadow-md w-auto inset-1  h-16"
          : "relative mt-8 ml-6 mr-4"
      }      flex`}
    >
      <div className="  flex">
        <SiteLogo></SiteLogo>
      </div>
      <div className="   flex grow   flex-row items-center justify-end rtl:justify-start px-4">
        <NavMenu />
      </div>
      <div className="flex  ">{/* <Profile></Profile> */}</div>
    </div>
  );
}
