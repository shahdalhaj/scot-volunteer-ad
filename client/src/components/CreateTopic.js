import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";

const CreateTopic = () => {
  //   const [data, setData] = useState(null)
  // const [form, setForm] = useState({title:"",info:"",documentLink:"",question:[]})
  // const [isSubmiting, setIsSubmiting] = useState(false)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem"
      }}
    >
      <div
        style={{
          width: "400px",
          height: "700px",
          display: "flex",
          flexDirection: "column",
          border: "1px gray solid",
          borderRadius: "2%",
          boxShadow: "3px 6px gray",
          padding: 30
        }}
      >
        <div style={{ height: "30px" }} />
        <Typography
          style={{
            position: "relative",
            left: 90,
            marginBottom: 10,
            color: "orange",
            fontSize: "large"
          }}
        >
          Create a new topic
        </Typography>
        <div style={{ height: "30px" }} />
        <Typography>Title:</Typography>
        <div style={{ height: "10px" }} />
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          style={{ height: "30px" }}
        />
        <div style={{ height: "50px" }} />
        <Typography>Document Link:</Typography>
        <div style={{ height: "10px" }} />
        <TextField
          id="outlined-basic"
          label="Document Link"
          variant="outlined"
        />
        <div style={{ height: "30px" }} />
        <Typography>Info:</Typography>
        <div style={{ height: "10px" }} />
        <TextField
          id="standard-multiline-flexible"
          variant="outlined"
          label="Topic Info"
          multiline
          rowsMax={4}
          style={{ height: "70px" }}
        />
        <div style={{ height: "50px" }} />
        <Typography>Add Questions:</Typography>
        <div style={{ height: "10px" }} />
        <TextField
          id="outlined-basic"
          label="click to add a question"
          variant="outlined"
        />
        <div style={{ height: "30px" }} />
        <Button
          variant="contained"
          color="secondary"
          style={{ backgroundColor: "orangered", borderRadius: "5rem" }}
        >
          Submit Question
        </Button>
        <div style={{ height: "10px" }} />
        <Button
          variant="contained"
          color="secondary"
          style={{ backgroundColor: "orangered", borderRadius: "5rem" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default CreateTopic;
