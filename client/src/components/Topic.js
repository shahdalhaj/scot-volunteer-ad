import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Topic = () => {
  let { id } = useParams();
  let [api, setApi] = useState([]);
  const [questions, setQuestions] = useState([]);
  const TOKEN = localStorage.getItem("token");
  useEffect(() => {
    fetch(`/api/topics/${id}`, {
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
    fetch(`/api/topics/${id}/questions`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);
  console.log("questions are " + questions);

  const renderQuestions = (question, index) => {
    return (
      <div key={index}>
        <Typography>List of questions: </Typography>
        <Typography>{question.question_text}</Typography>
      </div>
    );
  };
  return (
    <div>
      <Typography>{api.topic_name}</Typography>
      <a href={api.document_link}>{api.document_name}</a>
      {questions.map(renderQuestions)}
    </div>
  );
};

export default Topic;
