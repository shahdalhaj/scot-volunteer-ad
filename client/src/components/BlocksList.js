import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import Block from "./Block";
import BlocksForm from "./BlocksForm";

const BlocksList = () => {
  const [blocks, setBlocks] = useState([]);
  const [add, setAdd] = useState(false);
  const TOKEN = localStorage.getItem("token");

  const addToggle = () => {
    setAdd(!add);
  };

  useEffect(async () => {
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
  }, []);

  const addBlock = async blockName => {
    try {
      const body = { block_name: blockName };
      const response = await fetch("/api/blocks", {
        method: "POST",
        body: JSON.stringify(body),

        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      });
      if (response.status === 200) {
        setBlocks([...blocks, blockName]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateBlock = async (blockId, newValue) => {
    if (!newValue || /^s*$/.test(newValue)) return;
    try {
      const body = { block_name: newValue };
      const response = await fetch(`/api/blocks/${blockId}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      });
      if (response === 200);
      window.location = "/blockslist";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
      <Typography
        style={{
          fontSize: "43px",
          marginLeft: "530px"
        }}
      >
        Blocks List
      </Typography>
      {add && <BlocksForm createBlock={addBlock} updateBlock={updateBlock} />}
      {add && (
        <Button
          onClick={() => addToggle()}
          variant="contained"
          style={{
            color: "white",
            marginLeft: "60px",
            backgroundColor: "red"
          }}
        >
          Cancle
        </Button>
      )}
      {!add && (
        <Button
          onClick={() => addToggle()}
          variant="contained"
          style={{
            color: "white",
            marginLeft: "65px",
            backgroundColor: "orangered"
          }}
        >
          Create a new block
        </Button>
      )}
      <Block blocks={blocks} updateBlock={updateBlock} />
    </div>
  );
};

export default BlocksList;
