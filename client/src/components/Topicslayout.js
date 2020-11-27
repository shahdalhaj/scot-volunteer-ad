import React, { useState } from "react";
import OneCard from "./OneCard";

const TopicsLayout = () => {
  let [data, setData] = useState([
    { title: "title1", info: "topic info should go here", id: 1 },
    { title: "title2", info: "topic info should go here", id: 2 },
    { title: "title3", info: "topic info should go here", id: 3 },
    { title: "title4", info: "topic info should go here", id: 4 }
  ]);

  return (
    <div>
      <OneCard setData={setData} data={data} />
    </div>
  );
};
export default TopicsLayout;
