import React from "react";
import logo from "../public/logo.png";
import {
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export default function HeroSection() {
  console.log(logo);
  return (
    <div className={"flex flex-col items-center gap-2 p-5"}>
      <img src={logo.src} alt={"plugin-logo"} className={"w-40 col-span-2"} />
      <p className={"text-center text-xl"}>Test Data Seed Plugin</p>
      <div className={"flex gap-4"}>
        <Cog6ToothIcon
          className={
            "w-12 hover:bg-gray-100 fill-gray-400 p-2 rounded-md duration-500"
          }
        />
        <InformationCircleIcon
          className={
            "w-12 hover:bg-gray-100 fill-gray-400 p-2 rounded-md duration-500"
          }
        />
      </div>
    </div>
  );
}
