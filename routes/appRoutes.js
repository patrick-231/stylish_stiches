const express = require("express");
const upload = require("../controllers/services/upload");
const { uploadImage, getImages } = require("../controllers/appControllers");
const router = express.Router();

router.get("/images", getImages);

router.post("/upload", upload.single("picture"), uploadImage);
module.exports = router;
