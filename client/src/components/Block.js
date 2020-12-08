import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton
} from "@material-ui/core";
import BlocksForm from "./BlocksForm";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const Block = ({ blocks, updateBlock }) => {
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
          style={{ marginTop: 5, background: "#faf0be" }}
        >
          <CardContent>
            <Typography variant="h6">
              {block.block_name}
              <IconButton style={{ float: "right" }}>
                <EditOutlinedIcon
                  style={{ color: "maginta" }}
                  onClick={() => {
                    setEdit({
                      blockId: block.block_id,
                      blockName: block.block_name
                    });
                  }}
                />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Block;
