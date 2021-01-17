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
import { Link } from "react-router-dom";

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
              <Link
                to="/topics"
                style={{
                  textDecoration: "none",
                  backgroundColor: "orange",
                  border: "1px white solid",
                  borderRadius: "0.5rem",
                  fontSize: "small",
                  float: "right",
                  color: "white",
                  paddingLeft: 8,
                  paddingTop: 5,
                  paddingRight: 8,
                  paddingBottom: 20,
                  marginRight: "2rem",
                  width: "60px",
                  height: "13px"
                }}
              >
                VIEW
              </Link>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Block;
