const express = require("express");
const router = express.Router();

const users = require("./users");
const status = require("./status");
const topics = require("./topics");
const blocks = require("./blocks");

router.use("/users", users);
router.use("/status", status);
router.use("/topics", topics);
router.use("/blocks", blocks);

module.exports = router;
