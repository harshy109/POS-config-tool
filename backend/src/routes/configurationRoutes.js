const express = require("express");

const router = express.Router();

const configurationController = require("../controllers/configurationController");


router.get(
    "/path/:nodeId",
    configurationController.getHierarchyPath
);

router.get(
  "/:nodeId",
  configurationController.getEffectiveConfiguration
);
module.exports = router;