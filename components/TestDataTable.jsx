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
  ];
  return (
    <div className={"grid w-96 gap-3 m-auto"}>
      {mockData.map((test, index) => (
        <TableEntry key={`table-entry-${index}`} {...test} />
      ))}
    </div>
  );
}
