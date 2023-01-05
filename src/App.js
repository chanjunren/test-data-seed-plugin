import React from "react";
import HeroSection from "./components/HeroSection";
import TestDataTable from "./components/TestDataTable";
import TableHeader from "./components/TableHeader";
import { GET_REQ } from "./utils/constants";

export function App() {
  return (
    <div className={"min-w-[28rem]"}>
      <HeroSection />
      <div className={"grid justify-items-center gap-2"}>
        <TableHeader requestType={GET_REQ} url={"/v3/c2c/accounts/current"} />
        <TestDataTable />
      </div>
    </div>
  );
}
