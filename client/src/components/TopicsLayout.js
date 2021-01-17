import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const TopicsLayout = () => {
  let [api, setApi] = useState([]);
  const getAllData = () => {
    fetch("/api/topics/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setApi(data));
  };
  const TOKEN = localStorage.getItem("token");
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Cards setData={setApi} data={api} getAllData={getAllData()} />
    </div>
  );
};

export default TopicsLayout;
