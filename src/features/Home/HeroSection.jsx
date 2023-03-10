import React, { useState } from "react";
import {
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import heroAnimation from "../../static/hero-animation.json";
import Lottie from "lottie-react";
import SettingsModal from "./SettingsModal";

export default function HeroSection() {
  const [isSettingsModalActive, setSettingsModal] = useState(false);
  function toggleSettingsModal() {
    setSettingsModal(!isSettingsModalActive);
  }
  return (
    <div
      className={
        "flex flex-col items-center gap-2 p-5 h-[30rem] snap-center justify-center"
      }
    >
      <SettingsModal
        isActive={isSettingsModalActive}
        toggleModal={toggleSettingsModal}
      />
      <Lottie animationData={heroAnimation} loop={true} />
      <p className={"text-center text-xl"}>Test Data Seed Plugin</p>
      <div className={"flex gap-4"}>
        <Cog6ToothIcon
          className={
            "w-12 hover:bg-gray-200 stroke-gray-400 p-2 rounded-md duration-500"
          }
          onClick={toggleSettingsModal}
        />
        <InformationCircleIcon
          className={
            "w-12 hover:bg-gray-200 stroke-gray-400 p-2 rounded-md duration-500"
          }
        />
      </div>
    </div>
  );
}
