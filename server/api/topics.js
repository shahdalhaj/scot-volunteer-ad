const express = require("express");
const router = express.Router();
const topicDb = require("../services/database/topics");
const passport = require("passport");

router.get("/",passport.authenticate("jwt", { session: false }), (req, res) => {
	topicDb
		.getAllTopics()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.error(err);
			res.json(500);
		});
});
router.get("/:topic_id", passport.authenticate("jwt", { session: false }),(req, res)=> {

	const topicId =Number(req.params.topic_id);
	topicDb
		.getTopicById(topicId)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.error(err);
			res.json(500);
		});

});


router.post("/create", function(req, res) {
	const newTopicName = req.body.topic_name;
	const documentName = req.body.document_name;
	const documentLink = req.body.document_link;
	if(!newTopicName){
		return res.status(400).send("Could you please enter the topic name");
	}
	topicDb
		.createNewTopic(newTopicName ,documentName, documentLink )
		.then(() => res.send("Topic created!"))

		.catch((err) => {
			console.error(err);
			res.json(500);
		});
});

router.get("/:topic_id/questions", (req, res) => {
	const id = req.params.topic_id;
	topicDb
		.getAllQuestions(id)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.error(err);
			res.json(500);
		});
});
router.get("/:topic_id/questions/:question_id", (req, res) => {

	const topicId = req.params.topic_id;
	const questionId = req.params.question_id;
	topicDb
		.getQuestionById(topicId, questionId )
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.error(err);
			res.json(500);
		});
});
router.post("/:topic_id/question", (req, res) => {
	const newQuestion = req.body.question_text;
	const id = req.params.topic_id;
	if(!newQuestion){
		return res.status(400).send("The question can not be empty");
	}
	topicDb
		.createNewQuestion(id, newQuestion)
		.then((data) => res.status(200).json(data))
		.catch(() => {
			res.status(500).json({
				error: "creating a new question failed",
			});
		 });
});
router.put("/:topic_id/question", function (req, res) {
	const newQuestion = req.body.question_text;
	const id = req.params.topic_id;
	if(!newQuestion){
		return res.status(400).send("The question can not be empty");
	}
	topicDb
		.updateQuestion( id, newQuestion)
		.then((data) => res.status(200).json(data))
		.catch(() => {
			res.status(500).json({
				error: "500 Internal Server Error",
			});
		 });
});
module.exports = router;