import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TitleForm from "./TitleForm";
import { Link } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    backgroundImage:
      'url("data:image/jpeg;base64,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")',
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    justifyContent: "center",
    backgroundSize: "cover",
    flexDirection: "column",
    margin: 5
  },
  media: {
    height: 20,
    width: 70
  }
});

const Cards = props => {
  const classes = useStyles();

  const [editTopicName, setEditTopicName] = useState("");
  const [editTopicId, setEditTopicId] = useState(null);
  const handleEditMode = id => {
    setEditTopicId(id);
  };
  const handleOkClick = () => {
    const TOKEN = localStorage.getItem("token");
    handleEditMode(null);
    fetch(`/api/topics/${editTopicId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        topic_name: editTopicName
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      });
  };
  const updateTopic = (topicId, updatedValue) => {
    setEditTopicName(updatedValue);
  };

  function title() {
    return (
      <Typography
        style={{
          fontSize: "43px",
          marginLeft: "530px"
        }}
      >
        Topics List
      </Typography>
    );
  }

  const renderCards = (topic, index) => {
    return (
      <div>
        <Card
          className={classes.root}
          key={index}
          style={{ width: "20rem", height: "10rem" }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              title="Contemplative Reptile"
            />
            <CardContent>
              {editTopicId === topic.topic_id && (
                <TitleForm updateTopic={updateTopic} topic={topic} />
              )}
              {editTopicId === topic.topic_id && (
                <Button
                  startIcon={<SaveIcon />}
                  onClick={() => {
                    handleOkClick();
                  }}
                ></Button>
              )}
              {editTopicId !== topic.topic_id && (
                <Typography
                  onDoubleClick={() => handleEditMode(topic.topic_id)}
                  style={{ position: "relative", left: 60 }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {topic.topic_name}
                </Typography>
              )}
              <Typography variant="body2" color="textSecondary" component="p">
                {topic.info}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              to={`/topics/${topic.topic_id}`}
              style={{
                textDecoration: "none",
                backgroundColor: "orangered",
                border: "1px white solid",
                borderRadius: "5rem",
                color: "white",
                paddingLeft: 25,
                paddingBottom: 10,
                width: "60px",
                height: "15px"
              }}
            >
              View
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <div style={{}}>{title()}</div>

      <div
        style={{
          marginLeft: "200px",
          width: "900px",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 20
        }}
      >
        {Object.values(props.data).map(renderCards)}

        <Card
          className={classes.root}
          style={{ width: "25rem", height: "10rem" }}
        >
          <CardActions>
            <Link
              to="/CreateTopic"
              style={{
                textDecoration: "none",
                backgroundColor: "orangered",
                border: "1px white solid",
                borderRadius: "5rem",
                color: "white",
                padding: 7
              }}
            >
              create a new Topic
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
