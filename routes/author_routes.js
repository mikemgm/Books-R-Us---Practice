const express = require("express");
const router = express.Router();
const AuthorController = require("./../controllers/author_controller");

router.get("/", AuthorController.index);

router.post("/", AuthorController.create);

router.get("/new", AuthorController.make);

router.delete("/:id", AuthorController.destroy);

router.patch("/:id", AuthorController.update);

router.put("/:id", AuthorController.update);

router.get("/:id", AuthorController.show);

router.get("/:id/edit", AuthorController.edit);

module.exports = router;