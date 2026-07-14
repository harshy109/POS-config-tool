const configurationRepository =
require("../repositories/configurationRepository");

async function getHierarchyPath(nodeId){

    return await configurationRepository
        .getHierarchyPath(nodeId);

}

async function getEffectiveConfiguration(nodeId) {

  const hierarchyPath =
    await configurationRepository.getHierarchyPath(nodeId);

  const nodeIds =
    hierarchyPath.map(node => node.id);

  const configurations =
    await configurationRepository.getNodeConfigurations(nodeIds);

  return {
    hierarchyPath,
    configurations
  };

}

module.exports = {

    getHierarchyPath,
    getEffectiveConfiguration

};