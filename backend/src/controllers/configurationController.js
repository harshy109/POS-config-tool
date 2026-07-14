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

module.exports = {

    getHierarchyPath,
    getEffectiveConfiguration

};