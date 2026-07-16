const pool = require("../config/db");
const configurationService = require("../services/configurationService");

async function getHierarchyPath(req,res){

    const { nodeId } = req.params;

    const result =
        await configurationService
            .getHierarchyPath(nodeId);

    res.json(result);

}
async function getEffectiveConfiguration(req, res) {

  try {

    const nodeId = Number(req.params.nodeId);

    const result =
      await configurationService.getEffectiveConfiguration(nodeId);

    res.json(result);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Unable to fetch configuration"
    });

  }

}

async function updateConfiguration(req, res) {
  try {
    const { nodeId } = req.params;

    const { generalSettings } = req.body;

    const updatedConfiguration =
      await configurationService.updateConfiguration(
        nodeId,
        generalSettings
      );

    res.status(200).json(updatedConfiguration);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update configuration",
    });
  }
}

module.exports = {

    getHierarchyPath,
    getEffectiveConfiguration,
    updateConfiguration

};