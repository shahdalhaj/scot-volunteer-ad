import { Typography, Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Topic = () => {
  let { id } = useParams();
  let [api, setApi] = useState([]);
  let [questionState, setQuestionState] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [addQuestion, setAddQuestion] = useState("");
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
  const handleChange = event => {
    setAddQuestion(event.target.value);
    console.log(addQuestion);
  };
  // const submitQuestion=()=>{
  //  setQuestionState(false)
  //  }
  const handleNewQuestion = event => {
    event.preventDefault();
    setQuestionState(!questionState);
    fetch(`/api/topics/${id}/question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        question_text: addQuestion
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }
      });
    setAddQuestion("");
  };
  const renderQuestions = (question, index) => {
    return (
      <div key={index}>
        <Typography
          style={{
            marginTop: "0.3rem",
            marginRight: "190px"
          }}
        >
          {question.question_text}
        </Typography>
      </div>
    );
  };
  return (
    <div
      style={{
        border: "1px solid orange",
        width: "500px",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: "400px",
        marginTop: "80px"
      }}
    >
      <Typography
        style={{
          marginTop: "25px",
          fontSize: "27px"
        }}
      >
        {api.topic_name}
      </Typography>
      <div
        style={{
          height: "20px"
        }}
      />
      <a
        style={{
          marginBottom: "0.2rem",
          marginRight: "430px"
        }}
        href={api.document_link}
      >
        {api.document_name}
      </a>
      <Typography
        style={{
          marginTop: "0.3rem",
          marginRight: "340px"
        }}
      >
        List of questions:
      </Typography>
      {questions.map(renderQuestions)}
      {questionState && (
        <TextField
          variant="outlined"
          label="Enter new question"
          value={addQuestion}
          onChange={handleChange}
        />
      )}

      <Button onClick={handleNewQuestion}>Add A New Question</Button>
      {/*{questionState && <Button onClick ={submitQuestion}>  Submit
</Button>}*/}

      <Link
        to="/topics"
        style={{
          marginTop: "1rem",
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
          marginBottom: "15px",
          fontSize: "15px"
        }}
      >
        BACK TO TOPICS
      </Link>
    </div>
  );
};

export default Topic;
