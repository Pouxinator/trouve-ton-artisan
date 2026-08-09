const express = require("express");
const router = express.Router();

const artisanController = require("../controllers/artisanController");

router.get("/", artisanController.getAllArtisans);
router.get("/top", artisanController.getTopArtisans);
router.post("/:id/contact", artisanController.contactArtisan);
router.get("/:id", artisanController.getArtisanById);

module.exports = router;