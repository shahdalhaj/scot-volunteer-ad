import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";

function UpdateQuestion() {
  let [api, setApi] = useState([]);
  let [questions, setQuestions] = useState([]);
  let [editedQuestion, setEditedQuestion] = useState("");
  let [editMode, setEditMode] = useState(false);

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
  console.log(api);

  useEffect(() => {
    fetch(`/api/topics/${api.topic_id}/questions`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setEditMode(!editMode);
    fetch(`/api/topics/${api.topic_id}/question/${questions.question_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        question_text: editedQuestion
      })
        .then(res => res.json())
        .then(data => console.log(data))
    });
  };
  const handleChange = event => {
    setEditedQuestion(event.target.value);
  };

  return (
    <div>
      {editMode && (
        <TextField
          variant="outlined"
          label="Edit This Question"
          value={editedQuestion}
          onChange={handleChange}
        />
      )}
      {editMode && <Button onclick={handleSubmit}>Done</Button>}
      {!editMode && (
        <Typography onDoubleClick={setEditMode(true)}>
          {questions.question_text}
        </Typography>
      )}
    </div>
  );
}

export default UpdateQuestion();
