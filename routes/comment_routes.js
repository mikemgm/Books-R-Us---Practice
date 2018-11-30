const express = require("express");
const router = express.Router({mergeParams: true});
const CommentController = require("../controllers/comment_controller");

router.post("/", CommentController.create);

module.exports = router;