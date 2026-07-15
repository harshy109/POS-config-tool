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

router.put("/:nodeId", configurationController.updateConfiguration);


module.exports = router;