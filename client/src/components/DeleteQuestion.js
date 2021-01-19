import React from "react";

const DeleteQuestion = ({ id, questions, setQuestions, topicId }) => {
  // :topic_id/questions/:question_id
  const handleClick = (id, topicId) => {
    const TOKEN = localStorage.getItem("token");

    fetch(`/api/topics/${topicId}/questions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
      .then(res => res.json())
      .then(() =>
        setQuestions(questions.filter(question => question.question_id !== id))
      )
      .catch(error => {
        console.log(error + "error fetching");
      });
  };

  return (
    <div>
      <button
        onClick={() => handleClick(id, topicId)}
        className="btn btn-danger"
        style={{ fontSize: "small" }}
      >
        DELETE
      </button>
    </div>
  );
};

export default DeleteQuestion;
