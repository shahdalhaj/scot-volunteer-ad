import { Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
const confirmation = () => {
  let [btnToggle, setBtnToggle] = useState(true);

  const toggle = () => {
    setBtnToggle(!btnToggle);
  };
  const redirect = () => {
    window.location = "./assessment";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "38rem",
        marginLeft: "23rem",
        height: "68vh"
      }}
    >
      {btnToggle && (
        <div>
          <Typography>
            Thank you for compeleting the assessment click on the buttons down
            below to retake the assessment or submit your answers
          </Typography>
          <div>
            {" "}
            <Button
              style={{
                backgroundColor: "#000000",
                color: "white",
                marginRight: 7
              }}
              onClick={toggle}
            >
              Submit
            </Button>
            <Button
              style={{
                backgroundColor: "#000000",
                color: "white",
                marginRight: 7
              }}
              onClick={redirect}
            >
              Retake
            </Button>
          </div>
        </div>
      )}
      {!btnToggle && (
        <div>
          {" "}
          <Typography>
            Thank you for taking the time to complete all questions. We truly
            value the information you have provided. Your responses will
            contribute to our analyses and your assessment will be reviewd
            within the next 3 working days.
          </Typography>
          <Typography>Refmentors Team</Typography>
        </div>
      )}
    </div>
  );
};

export default confirmation;
