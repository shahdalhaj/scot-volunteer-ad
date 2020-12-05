import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton
} from "@material-ui/core";

import { Check, Delete } from "@material-ui/icons";
const Block = () => {
  return (
    <Container>
      <Card
        variant="outlined"
        style={{ marginTop: 35, background: "lightblue" }}
      >
        <CardContent>
          <Typography variant="h5">
            <IconButton style={{ float: "left" }}>
              <Check style={{ color: "green" }} />
            </IconButton>
            <IconButton style={{ float: "right" }}>
              <Delete style={{ color: "green" }} />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Block;
