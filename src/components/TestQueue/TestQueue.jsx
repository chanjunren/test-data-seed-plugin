import React from "react";
import UnprocessedTest from "./UnprocessedTest";

export default function TestQueue({ pluginState }) {
  return (
    <div className={"w-[30rem] overflow-y-scroll bg-gray-100 grid gap-5 p-5"}>
      <p
        className={
          "justify-self-start bg-teal-400 text-white p-1 pl-2 pr-2 rounded-md justify-self-start w-fit"
        }
      >
        {pluginState.targetUrl}
      </p>
      {pluginState.unprocessedTests.map((test, idx) => (
        <UnprocessedTest {...test} key={`unprocessed-test-${idx}`} />
      ))}
    </div>
  );
}
