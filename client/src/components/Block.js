import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button
} from "@material-ui/core";
import BlocksForm from "./BlocksForm";
import { Link } from "react-router-dom";
import DeleteBlock from "./DeleteBlock";

const Block = ({ blocks, updateBlock, setBlocks }) => {
  const [edit, setEdit] = useState({ blockId: null, blockName: "" });
  const submitUpdate = blockName => {
    updateBlock(edit.blockId, blockName);
    setEdit({
      blockId: null,
      blockName: ""
    });
  };

  if (edit.blockId) {
    return <BlocksForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <Container>
      {blocks.map(block => (
        <Card
          variant="outlined"
          style={{ marginTop: 5, background: "#faf0be", height: "auto" }}
        >
          {console.log(block.block_id)}
          <CardContent>
            <Typography
              variant="h6"
              style={{
                marginLeft: 5,
                fontFamily: "Georgia, serif",
                fontWeight: "bold"
              }}
            >
              {block.block_name}
            </Typography>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{
                  backgroundColor: "#000000",
                  color: "white",
                  marginRight: 7
                }}
                onClick={() => {
                  setEdit({
                    blockId: block.block_id,
                    blockName: block.block_name
                  });
                }}
              >
                EDIT
              </Button>

              <DeleteBlock
                style={{ marginRight: 7 }}
                id={block.block_id}
                blocks={blocks}
                setBlocks={setBlocks}
              />
              <Button
                style={{
                  backgroundColor: "orange",
                  border: "1px white solid",
                  borderRadius: "0.3rem",
                  fontSize: "small",
                  marginLeft: 7
                }}
              >
                {" "}
                <Link
                  to="/topics"
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                >
                  VIEW
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Block;
