const express = require("express");

const router = express.Router();

const hierarchyController = require("../controllers/hierarchyController");

router.get("/", hierarchyController.getHierarchy);

module.exports = router;