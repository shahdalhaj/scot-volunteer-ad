import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import DeleteTopic from "./DeleteTopic";
import Typography from "@material-ui/core/Typography";
import TitleForm from "./TitleForm";
import { Link } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    display: "flex",
    alignItems: "center",
    borderImage:
      'url("https://st.depositphotos.com/1672894/2339/v/950/depositphotos_23397572-stock-illustration-orange-petals-frame.jpg") 30',
    borderLeft: "4px solid orange",
    borderBottom: "4px solid orange",
    borderRight: "4px solid orangeRed",
    borderTop: "4px solid orangeRed",
    justifyContent: "center",
    backgroundColor: "#FFFFE0",
    backgroundSize: "cover",
    flexDirection: "column",
    margin: 5,
    borderRadius: "11px"
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
              {editTopicId === topic.topic_id && (
                <Button
                  startIcon={<CancelRoundedIcon />}
                  onClick={() => {
                    handleEditMode(null);
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
              VIEW
            </Link>
            <DeleteTopic data={props.data} id={topic.topic_id} />
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
