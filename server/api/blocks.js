const express = require("express");
const router = express.Router();
const blockDb = require("../services/database/blocks");
// const passport = require("passport");

router.get("/", (req, res) => {
  blockDb
    .getAllBlocks()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.json(500);
    });
});

router.get("/:block_id", (req, res) => {
  try {
    const blockId = Number(req.params.block_id);
    blockDb.getBlockById(blockId).then((data) => {
      res.json(data);
    });
  } catch (err) {
    res.status(500).json({
      error: "500 Internal Server Error while loading Blocks page",
    });
  }
});

router.post("/", (req, res) => {
  const newBlockName = req.body.block_name;
  console.log("posting new block-->", newBlockName);

  if (!newBlockName) {
    res.status(400).json({
      error: "Could you please enter the Block name pleae ",
    });
  }
  console.log("posting new block");
  blockDb
    .createNewBlock(newBlockName)
    .then((data) => res.status(200).json(data))
    .catch(() => {
      res.status(500).json({
        error: "Creating a new block failed",
      });
    });
});

router.put("/:block_id", function(req, res) {
  const blockId = req.params.block_id;
  const newBlockName = req.body.block_name;
  if (!newBlockName) {
    res.status(400).json({
      error: "Could you please enter the block name please",
    });
  }
  console.log(blockId, newBlockName);
  blockDb
    .updateBlock(newBlockName, blockId)
    .then((data) => res.status(200).json(data))
    .catch(() => {
      res.status(500).json({
        error: "500 Internal Server Error",
      });
    });
});

module.exports = router;
