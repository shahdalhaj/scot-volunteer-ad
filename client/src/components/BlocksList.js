import React, { useState, useEffect } from "react";

import Block from "./Block";
import BlocksForm from "./BlocksForm";

const BlocksList = () => {
  const [blocks, setBlocks] = useState([]);
  //   const [block_name, setBlock_Name] = useState("");
  const TOKEN = localStorage.getItem("token");
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
    <>
      <BlocksForm createBlock={addBlock} updateBlock={updateBlock} />
      <Block blocks={blocks} updateBlock={updateBlock} />
    </>
  );
};

export default BlocksList;
