const express = require("express");
const router = express.Router();

const users = require("./users");
const status = require("./status");
const assessments = require("./assessments");


router.use("/users", users);
router.use("/status", status);
router.use("/assessments", assessments);

module.exports = router;
