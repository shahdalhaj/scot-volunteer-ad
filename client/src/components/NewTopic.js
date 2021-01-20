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
    window.location = "/topics";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderImage:
          'url("https://st.depositphotos.com/1672894/2339/v/950/depositphotos_23397572-stock-illustration-orange-petals-frame.jpg") 10',
        borderLeft: "10px solid orange",
        borderBottom: "10px solid orange",
        borderRight: "10px solid orangeRed",
        borderTop: "10px solid orangeRed",
        borderRadius: "10px",
        boxShadow: "3px 3px 5px 6px #ccc",
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
        <div></div>
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
          width: "120px",
          marginRight: "0.4rem"
        }}
        variant="contained"
      >
        Submit
      </Button>
      <Button
        style={{
          backgroundColor: "orangered",
          color: "white",
          fontSize: "15px"
        }}
      >
        <Link
          to="/topics"
          style={{
            textDecoration: "none",
            color: "white"
          }}
        >
          BACK TO TOPICS
        </Link>
      </Button>
    </div>
  );
}

export default NewTopic;
