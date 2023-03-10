import React from "react";
import TableEntry from "./TableEntry";

export default function TestDataTable() {
  const mockData = [
    {
      description: "Happy path",
    },
    {
      description: "Not so happy path",
    },
    {
      description: "Happy path",
    },
    {
      description: "Not so happy path",
    },
    {
      description: "Happy path",
    },
    {
      description: "Not so happy path",
    },
    {
      description: "Happy path",
    },
    {
      description: "Not so happy path",
    },
    {
      description: "Happy path",
    },
    {
      description: "Not so happy path",
    },
    {
      description: "Happy path",
    },
    {
      description: "Not so happy path",
    },
  ];
  return (
    <div className={"grid gap-3 w-full overflow-y-scroll"}>
      {mockData.map((test, index) => (
        <TableEntry key={`table-entry-${index}`} {...test} />
      ))}
    </div>
  );
}
