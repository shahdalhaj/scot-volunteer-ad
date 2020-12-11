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

  const handleCreateBlock = e => {
    e.preventDefault;
    createBlock(input);
    setInput("");
  };

  const handleUpdateBlock = e => {
    e.preventDefault;
    onSubmit(input);
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
            color="primary"
            style={{ marginTop: 5 }}
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
            color="primary"
            style={{ marginTop: 5 }}
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
