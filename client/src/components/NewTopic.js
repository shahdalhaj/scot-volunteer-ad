import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

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
    console.log(updateNewTopic);
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
    console.log("the new topic " + newTopic);
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="topicName"
          variant="outlined"
          onChange={handleChange}
          name="topicName"
          value={newTopic.topicName}
        />
        <TextField
          id="outlined-basic"
          label="documentName"
          variant="outlined"
          onChange={handleChange}
          name="documentName"
          value={newTopic.documentName}
        />
        <TextField
          id="outlined-basic"
          label="documentLink"
          variant="outlined"
          onChange={handleChange}
          name="documentLink"
          value={newTopic.documentLink}
        />
        <Button to="/topics" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewTopic;
