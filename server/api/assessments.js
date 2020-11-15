const express = require("express");
const router = express.Router();
const usersDb = require("../services/database/assessments");

router.get("/", (req, res) => {
	usersDb
		.getAllAssessments()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.error(err);
			res.send(500);
		});
});

module.exports = router;