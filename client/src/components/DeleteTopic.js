import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const DeleteTopic = () => {
  let [api, setApi] = useState([]);
  console.log(api);

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
  const handleClick = () => {
    fetch(`/api/topics/${api.topic_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(() => api.filter(topic => topic.id === api.topic_id))
      .catch(error => {
        console.log(error + "error fetching");
      });
  };

  return (
    <Button
      style={{
        backgroundColor: "orangered",
        border: "1px white solid",
        borderRadius: "5rem",
        color: "white",
        width: "78px",
        height: "27px"
      }}
      onClick={() => {
        handleClick();
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteTopic;
