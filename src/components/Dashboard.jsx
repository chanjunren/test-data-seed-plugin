import React from "react";
import TestDataTable from "./TestDataTable";
import { TrashIcon } from "@heroicons/react/24/outline";
import SaveIcon from "./SaveIcon";

export default function Dashboard({ pluginState }) {
  return (
    <div
      className={
        "flex flex-col justify-items-center gap-2 p-3 pt-10 w-96 m-auto snap-center h-[30rem]"
      }
    >
      <p
        className={
          "bg-pink-400 text-white p-2 rounded-xl justify-self-start w-fit"
        }
      >
        {pluginState.targetUrl}
      </p>
      <div className={"flex self-end gap-2"}>
        <SaveIcon
          className={
            "w-10 hover:bg-gray-200 stroke-gray-400 p-2 rounded-md duration-500"
          }
        />
        <TrashIcon
          className={
            "w-10 hover:bg-gray-200 stroke-gray-400 p-2 rounded-md duration-500"
          }
        />
      </div>
      <TestDataTable />
    </div>
  );
}
