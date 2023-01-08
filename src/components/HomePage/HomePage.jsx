import React from "react";
import HeroSection from "./HeroSection";
import Dashboard from "./Dashboard";

export default function HomePage({ pluginState }) {
  return (
    <div
      className={
        "w-[30rem] max-h-[30rem] overflow-y-scroll snap-y snap-mandatory"
      }
    >
      <HeroSection />
      <Dashboard pluginState={pluginState} />
    </div>
  );
}
