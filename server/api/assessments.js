const express = require("express");
const router = express.Router();
const assessmentDb = require("../services/database/assessments");

router.get("/", (req, res) => {
	assessmentDb
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