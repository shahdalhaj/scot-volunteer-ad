import React from "react";
import { useParams } from "react-router-dom";

const Topic = () => {
  let { id } = useParams();
  return <div>topics page : {id}</div>;
};

export default Topic;
