const express = require("express");

const PostCtrl = require("../controllers/post-ctrl");

const router = express.Router();

router.post("/post", PostCtrl.createPost);
router.delete("/post/:id", PostCtrl.deletePost);
router.get("/post", PostCtrl.getPosts);

module.exports = router;
