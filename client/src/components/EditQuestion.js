import React, { useState } from "react";

const EditQuestion = ({ question, topicId }) => {
  const [text, setText] = useState(question.question_text);
  console.log(topicId);
  const editQuestionText = (topicId, qId) => {
    const TOKEN = localStorage.getItem("token");
    console.log(TOKEN);
    fetch(`/api/topics/${topicId}/question/${qId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        question_text: text
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      });
  };
  console.log(text);
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${question.question_id}`}
      >
        Edit
      </button>
      <div
        className="modal"
        id={`id${question.question_id}`}
        onSubmit={() => setText(question.question_text)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit question</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setText(question.question_text)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-contol"
                value={text}
                onChange={event => setText(event.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => editQuestionText(topicId, question.question_id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setText(question.question_text)}
              >
                Cancle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditQuestion;
