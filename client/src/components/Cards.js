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

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    backgroundImage:
      'url("https://image.freepik.com/free-vector/abstract-yellow-watercolor-background_1055-8388.jpg")',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  //const [questions, setQuestions] = useState([]);
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
      .then(data => console.log(data));
  };
  const updateTopic = (topicId, updatedValue) => {
    setEditTopicName(updatedValue);
  };
  //const handleQuestionsList = id => {
  //  console.log(id);
  //  const TOKEN = localStorage.getItem("token");

  //  handleEditMode(null);
  //  useEffect(() => {
  //    fetch(`/api/topics/${id}/questions`, {
  //      method: "GET",
  //      headers: {
  //        Authorization: `Bearer ${TOKEN}`
  //      }
  //    })
  //      .then(res => res.json())
  //      .then(data => setQuestions(data));
  //  }, []);
  ////};
  //console.log(questions);
  const renderCards = (topic, index) => {
    return (
      <Card
        className={classes.root}
        key={index}
        style={{ width: "20rem", height: "16rem" }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} title="Contemplative Reptile" />
          <CardContent style={{ paddingBottom: 30 }}>
            {editTopicId === topic.topic_id && (
              <TitleForm updateTopic={updateTopic} topic={topic} />
            )}
            {editTopicId === topic.topic_id && (
              <Button
                onClick={() => {
                  handleOkClick();
                }}
              >
                ok
              </Button>
            )}
            {editTopicId !== topic.topic_id && (
              <Typography
                onDoubleClick={() => handleEditMode(topic.topic_id)}
                style={{ position: "relative", left: 60, padding: 20 }}
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
              backgroundColor: "orangered",
              border: "1px white solid",
              borderRadius: "5rem",
              color: "white",
              padding: 15,
              paddingLeft: 25,
              paddingBottom: 20,
              width: "60px",
              height: "10px"
            }}
          >
            View
          </Link>
        </CardActions>
      </Card>
    );
  };

  return (
    <div
      style={{
        width: "60rem",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "50rem",
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
          style={{ width: "25rem", height: "16rem" }}
        >
          <CardActions>
            <Link
              to="/CreateTopic"
              style={{
                backgroundColor: "orangered",
                border: "1px white solid",
                borderRadius: "5rem",
                color: "white",
                padding: 10
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
