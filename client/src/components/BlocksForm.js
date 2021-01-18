import React, { useState, useEffect, useRef } from "react";
import { FormControl, Container, TextField, Button } from "@material-ui/core";

const BlockForm = ({ edit, createBlock, onSubmit }) => {
  const [input, setInput] = useState(!edit ? "" : edit.blockName);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleCreateBlock = () => {
    createBlock(input);
    setInput(" ");
  };

  const handleUpdateBlock = () => {
    // e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  const updateForm = (
    <>
      <form onSubmit={handleUpdateBlock}>
        <FormControl fullWidth={true}>
          <TextField
            label="Enter Block Name"
            required={true}
            ref={inputRef}
            defaultValue={input}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: 5,
              color: "white",
              backgroundColor: "orangered"
            }}
          >
            Update
          </Button>
        </FormControl>
      </form>
    </>
  );

  const addForm = (
    <>
      <form onSubmit={handleCreateBlock}>
        <FormControl fullWidth={true}>
          <TextField
            label="Enter Block Name"
            required={true}
            ref={inputRef}
            vlaue={input}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: 5,
              backgroundColor: "orangered",
              color: "white"
            }}
          >
            Add
          </Button>
        </FormControl>
      </form>
    </>
  );

  return (
    <Container maxWidth="sm" style={{ marginTop: 10 }}>
      {!edit ? addForm : updateForm}
    </Container>
  );
};

export default BlockForm;
