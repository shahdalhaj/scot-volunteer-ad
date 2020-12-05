import React, { useEffect } from "react";
import { FormControl, Container, TextField, Button } from "@material-ui/core";
import BlocksList from "./BlocksList";

const BlockForm = () => {
  // const [blocks, setBlocks] = useState();

  const getBlocks = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/blocks");
      const blockData = await response.json();
      console.log(blockData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getBlocks();
  });
  return (
    <Container maxWidth="sm">
      <form>
        <FormControl fullWidth={true}>
          <TextField label="Enter Block Name" required={true} />
          <Button variant="contained" color="primary" style={{ marginTop: 5 }}>
            Add
          </Button>
        </FormControl>
      </form>
      <BlocksList />
    </Container>
  );
};

export default BlockForm;
