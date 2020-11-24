const express = require("express");
const router = express.Router();

const users = require("./users");
const status = require("./status");
const topics = require("./topics");


router.use("/users", users);
router.use("/status", status);
router.use("/topics",topics);

module.exports = router;
