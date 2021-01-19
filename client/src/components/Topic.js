import { Typography, Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EditQuestion from "./EditQuestion";
import DeleteQuestion from "./DeleteQuestion";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

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
  const getAllQuestions = () => {
    fetch(`/api/topics/${id}/questions`, {
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
  const handleChange = event => {
    setAddQuestion(event.target.value);
    console.log(addQuestion);
  };
  const submitQuestion = () => {
    setQuestionState(!questionState);
  };
  console.log(api);
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
        setAddQuestion(" ");
        getAllQuestions();
      });
  };

  const assessmentLink = "http://localhost:3000/assessment";

  const renderQuestions = (question, index) => {
    return (
      <div key={index}>
        <div style={{ width: "100%", height: "60px" }}>
          {" "}
          <Typography
            style={{
              marginTop: "0.3rem",
              marginRight: "180px",
              fontSize: "medium",
              fontFamily: "Georgia, serif"
            }}
          >
            {question.question_text}
          </Typography>
          <div
            style={{
              marginLeft: "25rem",
              position: "relative",
              bottom: "20px",
              width: "30%",
              height: "50px",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            {" "}
            <EditQuestion question={question} topicId={api.topic_id} />
            <DeleteQuestion
              style={{ paddingBottom: "3px" }}
              id={question.question_id}
              questions={questions}
              setQuestions={setQuestions}
              topicId={api.topic_id}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        borderImage:
          'url("https://st.depositphotos.com/1672894/2339/v/950/depositphotos_23397572-stock-illustration-orange-petals-frame.jpg") 10',
        borderLeft: "5px solid orange",
        borderBottom: "5px solid orange",
        borderRight: "5px solid orangeRed",
        borderTop: "5px solid orangeRed",
        borderRadius: "10px",
        boxShadow: "3px 3px 5px 6px #ccc",
        width: "600px",
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
          fontSize: "27px",

          borderRadius: "20%",
          backgroundColor: "white",
          padding: "5px"
        }}
      >
        {api.topic_name}
      </Typography>
      <Button
        style={{
          fontSize: "small"
        }}
      >
        {" "}
        <a href={api.document_link}>{api.document_name}</a>
      </Button>

      <Typography
        style={{
          marginTop: "0.5rem",
          marginRight: "10px",
          fontSize: "25px"
        }}
      >
        List of questions:
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
      {questionState && (
        <TextField
          variant="outlined"
          label="Enter new question"
          value={addQuestion}
          onChange={handleChange}
        />
      )}

      <Button
        style={{
          border: "orangered 1px solid",
          color: "orangered",
          fontSize: "bold"
        }}
        onClick={submitQuestion}
      >
        Add A New Question
      </Button>
      <div>
        {" "}
        <Button
          style={{
            backgroundColor: "orangered",
            border: "1px white solid",
            color: "white",
            width: "180px",
            height: "30px"
          }}
        >
          <a
            href={`mailto:refmentor5@gmail.com?cc=refmentor5@gmail.com&bcc=refmentor5@gmail.com&Subject=${api.topic_name}&body=Hi Volunteer,
      Thank you for your interest in volunteering for RefMentors.
      We have prepared these list of questions for you to take for ${api.topic_name} 
     Heres the document link for ${api.topic_name}:${api.document_link}
      Please take the survey within 7 days at the following link:   ${assessmentLink}
      Once completed, we will call or email you to discus next steps.
      Any questions please let us know .
      RefMentors `}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            <MailOutlineIcon
              style={{ position: "absolute", top: "4px", left: "5px" }}
            />
            SEND TOPIC
          </a>
        </Button>
      </div>

      {questionState && <Button onClick={handleNewQuestion}> Submit</Button>}
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
            <NavigateBeforeIcon
              style={{ position: "absolute", top: "4px", left: "5px" }}
            />
            TOPICS
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Topic;
