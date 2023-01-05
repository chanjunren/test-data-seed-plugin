import React from "react";
import { GET_REQ } from "../utils/constants";
import { Tag } from "antd";

export default function TableHeader({ requestType, url }) {
  const postTag = <Tag color={"red"}>POST</Tag>;
  const getTag = <Tag color={"green"}>GET</Tag>;
  return (
    <div className={"flex gap-2"}>
      {requestType === GET_REQ ? getTag : postTag}
      <p className={"self-center"}>{url}</p>
    </div>
  );
}
