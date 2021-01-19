import { Typography } from "@material-ui/core";
import React from "react";
const confirmation = () => {
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
      <Typography>
        Thank you for taking the time to complete all questions. We truly value
        the information you have provided. Your responses will contribute to our
        analyses and your assessment will be reviewd within the next 7 days.
      </Typography>
      <Typography>Refmentors Team</Typography>
    </div>
  );
};

export default confirmation;
