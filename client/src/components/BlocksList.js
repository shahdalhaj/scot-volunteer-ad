import React from "react";
import Block from "./Block";
const BlocksList = ({ blocks }) => {
  return (
    <div>
      {blocks.map(block => (
        <Block key={block.block_id} blockName={block.block_name} />
      ))}
    </div>
  );
};

export default BlocksList;
