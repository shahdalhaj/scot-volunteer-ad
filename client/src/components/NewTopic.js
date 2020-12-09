import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useHistory, Link } from "react-router-dom";

function NewTopic() {
  const history = useHistory();
  const TOKEN = localStorage.getItem("token");

  const [newTopic, setNewTopic] = useState({
    topicName: "",
    documentName: "",
    documentLink: ""
  });
  const handleChange = event => {
    let updateNewTopic = {
      ...newTopic,
      [event.target.name]: event.target.value
    };
    setNewTopic(updateNewTopic);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`/api/topics/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        topic_name: newTopic.topicName,
        document_name: newTopic.documentName,
        document_link: newTopic.documentLink
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
      });

    history.push("/topics");

    setNewTopic({
      topicName: "",
      documentName: "",
      documentLink: ""
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid orange",
        height: "70vh",
        width: "500px",
        marginTop: "75px",
        marginLeft: "400px",
        flexWrap: "wrap"
      }}
    >
      <form>
        <Typography
          variant="h4"
          style={{
            marginLeft: "55px"
          }}
        >
          {" "}
          Create A New Topic
        </Typography>
        <div
          style={{
            height: "20px"
          }}
        />
        <Typography variant="h5">Topic Title:</Typography>
        <TextField
          style={{
            width: "450px"
          }}
          id="outlined-basic"
          label="Topic Name"
          variant="outlined"
          onChange={handleChange}
          name="topicName"
          value={newTopic.topicName}
        />
        <div
          style={{
            height: "20px"
          }}
        />
        <Typography variant="h5">Document Name:</Typography>
        <TextField
          style={{
            width: "450px"
          }}
          id="outlined-basic"
          label="Document Name"
          variant="outlined"
          onChange={handleChange}
          name="documentName"
          value={newTopic.documentName}
        />
        <div
          style={{
            height: "20px"
          }}
        />
        <Typography variant="h5">Document Link:</Typography>
        <TextField
          style={{
            width: "450px"
          }}
          id="outlined-basic"
          label="Document Link"
          variant="outlined"
          onChange={handleChange}
          name="documentLink"
          value={newTopic.documentLink}
        />
      </form>
      <Button
        onClick={handleSubmit}
        style={{
          backgroundColor: "orangered",
          color: "white",
          fontSize: "15px",
          width: "120px"
        }}
        variant="contained"
      >
        Submit
      </Button>
      <Link
        to="/topics"
        style={{
          textDecoration: "none",
          backgroundColor: "orangered",
          border: "1px white solid",
          color: "white",
          borderRadius: "5px",
          paddingLeft: 25,
          paddingBottom: 15,
          paddingTop: "10px",
          width: "120px",
          height: "13px",
          fontSize: "15px"
        }}
      >
        BACK TO TOPICS
      </Link>
    </div>
  );
}

export default NewTopic;
