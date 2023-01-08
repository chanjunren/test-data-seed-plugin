import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export default function UnprocessedTest({ params }) {
  const [isExpanded, setIsExpanded] = useState(true);
  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className={"grid gap-2 p-5 shadow bg-white rounded-md"}>
      <div className={"flex gap-3"}>
        <Input allowClear />
        <ChevronDownIcon
          className={`w-10 stroke-gray-400 p-2 rounded-md duration-500 ${
            isExpanded ? "rotate-180" : ""
          }`}
          onClick={toggleExpanded}
        />
      </div>
      <p
        className={`bg-black text-white p-3 absolute w-[400px] rounded-md ${
          isExpanded ? "opacity-1 -translate-y-[-3rem] z-10" : "opacity-0 -z-10"
        }`}
      >
        {params}
      </p>

      <div className={"justify-self-end flex gap-2"}>
        <Tooltip placement={"bottom"} title={"Skip test case"}>
          <XCircleIcon
            className={
              "w-10 hover:bg-red-300 hover:stroke-red-700 stroke-gray-400 p-2 rounded-md duration-500"
            }
          />
        </Tooltip>
        <Tooltip placement={"bottomRight"} title={"Add test"}>
          <CheckCircleIcon
            className={
              "w-10 hover:bg-green-300 hover:stroke-green-700 stroke-gray-400 p-2 rounded-md duration-500"
            }
          />
        </Tooltip>
      </div>
    </div>
  );
}
