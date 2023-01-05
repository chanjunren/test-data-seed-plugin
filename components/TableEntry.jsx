import React from "react";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

export default function TableEntry({ description }) {
  return (
    <div className={"flex shadow-md p-4 hover:scale-[1.02] duration-500"}>
      <p className={"basis-5/6 self-center"}>{description}</p>
      <MinusCircleIcon
        className={
          "w-10 hover:bg-red-400 hover:fill-red-400 hover:stroke-white stroke-red-400 p-2 rounded-md duration-200"
        }
      />
    </div>
  );
}
