import React from "react";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard";
import usePlugin from "./utils/usePlugin";

export function App() {
  const { pluginState } = usePlugin({
    targetUrl: "https://www.mangatx.com",
  });
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
