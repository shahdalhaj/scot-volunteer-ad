import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const DeleteTopic = ({ data, id }) => {
  const TOKEN = localStorage.getItem("token");
  const [api, setApi] = useState(data);
  console.log(api);
  const handleClick = () => {
    console.log(id);

    fetch(`/api/topics/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(() => setApi(api.filter(topic => topic.topic_id !== id)))
      .catch(error => {
        console.log(error + "error fetching");
      });
    // window.location = "/topics"
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
      onClick={() => handleClick(id)}
    >
      Delete
    </Button>
  );
};

export default DeleteTopic;
