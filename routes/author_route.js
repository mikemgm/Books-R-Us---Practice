const express = require('express');
const router = express.Router();
const AuthorController = require("./../controllers/author_controller");

router.get("/:id/edit", AuthorController.edit);

router.get("/new", AuthorController.newResource);

router.get("/:id", AuthorController.show);

router.put("/:id", AuthorController.update);

router.patch("/:id", AuthorController.update);

router.delete("/:id", AuthorController.remove);

router.get("/", AuthorController.index);

router.post("/", AuthorController.create);

module.exports = router;