import React, { useState, useEffect } from "react";
import Cards from "./Cards";
//import ViewButton from "./ViewButton";

const TopicsLayout = () => {
  let [api, setApi] = useState([]);

  const TOKEN = localStorage.getItem("token");
  useEffect(() => {
    fetch("/api/topics/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setApi(data));
  }, []);

  return (
    <div>
      <Cards setData={setApi} data={api} />
      {/*<ViewButton setData={setApi} data={api} />*/}
    </div>
  );
};

export default TopicsLayout;
