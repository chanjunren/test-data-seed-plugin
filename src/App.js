import React from "react";
import HeroSection from "./components/HeroSection";
import TestDataTable from "./components/TestDataTable";
import TableHeader from "./components/TableHeader";
import { GET_REQ } from "./utils/constants";

export function App() {
 return (
    <div>
        <HeroSection/>
        <TableHeader requestType={GET_REQ} url={"/v3/c2c/accounts/current"} />
        <TestDataTable />
    </div>
 )
}