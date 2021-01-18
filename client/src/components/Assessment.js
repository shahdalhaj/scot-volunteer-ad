import { Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const Assessment = () => {
  let [api, setApi] = useState([]);
  const [questions, setQuestions] = useState([]);
  const TOKEN = localStorage.getItem("token");

  useEffect(() => {
    fetch(`/api/topics/${1}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setApi(data));
  }, []);
  const getAllQuestions = () => {
    fetch(`/api/topics/${1}/questions`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => setQuestions(data));
  };
  useEffect(() => {
    getAllQuestions();
  }, []);

  const renderQuestions = (question, index) => {
    return (
      <div key={index} style={{ height: "auto" }}>
        <button
          style={{
            paddin: 10,
            width: "95%",
            height: "33px",
            marginLeft: 15,
            border: "none",
            backgroundColor: "#ffcc00",
            marginBottom: "1rem",
            borderRadius: "4px"
          }}
        >
          {" "}
          <Typography style={{}}>{question.question_text}</Typography>
        </button>
        <TextareaAutosize
          rowsMax={4}
          aria-label="maximum height"
          placeholder="Enter Your Answer"
          style={{
            width: "95%",
            height: "auto",
            marginLeft: 15,
            marginBottom: 0.5
          }}
          required={true}
        />
      </div>
    );
  };
  return (
    <div
      style={{
        width: "600px",
        border: "0.5px solid #eee",
        borderRadius: "10px",
        height: "auto",
        boxShadow: "3px 10px #888888",
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
          fontSize: "23px",

          borderRadius: "20%",
          backgroundColor: "white",
          padding: "5px"
        }}
      >
        {api.topic_name} Assessment
      </Typography>
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
          marginTop: "0.5rem",
          marginRight: "10px",
          fontSize: "20px"
        }}
      >
        Answer All Question
      </Typography>
      <div
        style={{
          width: "570px",
          height: "auto",
          margin: "20px",
          marginLeft: "20px"
        }}
      >
        <Typography
          style={{
            fontFamily: "georgia"
          }}
        >
          {" "}
          {questions.map(renderQuestions)}
        </Typography>
      </div>
      <div></div>

      <div>
        <Button
          style={{
            backgroundColor: "orangered",
            border: "1px white solid",
            color: "white",
            width: "180px",
            height: "30px",
            marginTop: "1rem",
            marginBottom: "1rem",
            marginRight: "23rem"
          }}
        >
          <Link
            to="/topics"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            SUBMIT
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Assessment;
