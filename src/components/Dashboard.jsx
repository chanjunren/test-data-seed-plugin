import React from "react";
import TestDataTable from "./TestDataTable";
import { TableCellsIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Dashboard({ pluginState }) {
  return (
    <div
      className={
        "flex flex-col justify-items-center gap-2 p-3 w-96 m-auto snap-center h-[30rem]"
      }
    >
      <p
        className={
          "bg-pink-400 text-white pl-2 pr-2 rounded-md justify-self-start w-fit"
        }
      >
        {pluginState.targetUrl}
      </p>
      <div className={"flex self-end"}>
        <TableCellsIcon
          className={
            "w-8 hover:bg-gray-200 stroke-gray-400 p-2 rounded-md duration-500"
          }
        />
        <TrashIcon
          className={
            "w-8 hover:bg-gray-200 stroke-gray-400 p-2 rounded-md duration-500"
          }
        />
      </div>
      <TestDataTable />
    </div>
  );
}
