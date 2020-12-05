import React, { useEffect, useState } from "react";
import { FormControl, Container, TextField, Button } from "@material-ui/core";
import BlocksList from "./BlocksList";

const BlockForm = () => {
  const [blocks, setBlocks] = useState([]);

  const [blockText, setBlockText] = useState("");

  const TOKEN = localStorage.getItem("token");

  const getBlocks = async () => {
    try {
      const response = await fetch("/api/blocks", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      });
      const blockData = await response.json();
      setBlocks(blockData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getBlocks();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const body = { blockText };
      const response = await fetch("http://localhost:4000/api/blocks", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(body),

        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(blocks);
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Enter Block Name"
            required={true}
            vlaue={blockText}
            onChange={e => setBlockText(e.target.value)}
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
      <BlocksList blocks={blocks} />
    </Container>
  );
};

export default BlockForm;
