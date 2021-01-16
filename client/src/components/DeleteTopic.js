import React from "react";
import Button from "@material-ui/core/Button";
const DeleteTopic = ({ id, api, setApi }) => {
  const TOKEN = localStorage.getItem("token");
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
