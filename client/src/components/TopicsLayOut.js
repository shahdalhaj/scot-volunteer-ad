import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const TopicsLayout = () => {
  let [api, setApi] = useState([]);

  const TOKEN = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:4000/api/topics", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json)
      .then(data => setApi(data));
  }, []);
  console.log(api);
  return (
    <div>
      <Cards setData={setApi} data={api} />
    </div>
  );
};

export default TopicsLayout;

//{
//  "email": "admin@cyf.org",
//  "password":"admin_password"
//}
