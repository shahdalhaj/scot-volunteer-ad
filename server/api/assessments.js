const express = require("express");
const router = express.Router();
// const usersDb = require("../services/database/assessments");

router.get("/", (req, res) => {
res.send('works!!!!')


});


module.exports = router;