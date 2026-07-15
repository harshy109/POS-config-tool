const configurationRepository =
  require("../repositories/configurationRepository");

async function getHierarchyPath(nodeId) {
  return await configurationRepository.getHierarchyPath(nodeId);
}

async function getEffectiveConfiguration(nodeId) {
  const hierarchyPath =
    await configurationRepository.getHierarchyPath(nodeId);

  const nodeIds =
    hierarchyPath.map(node => node.id);

  const configurations =
    await configurationRepository.getNodeConfigurations(nodeIds);

  const orderedPath = [...hierarchyPath].reverse();

  const effectiveConfig = {};

  orderedPath.forEach(node => {
    configurations
      .filter(config => config.node_id === node.id)
      .forEach(config => {
        effectiveConfig[config.key_name] = {
          key: config.key_name,
          label: config.display_name,
          value: config.value,
          isOverride: config.is_override,
        };
      });
  });

  return {
    node: hierarchyPath[0],
    hierarchyPath,
    generalSettings: Object.values(effectiveConfig),
  };
}

async function updateConfiguration(nodeId, settings) {

  for (const setting of settings) {

    const existingConfiguration =
      await configurationRepository.findNodeConfiguration(
        nodeId,
        setting.key
      );

    if (existingConfiguration) {

      await configurationRepository.updateNodeConfiguration(
        existingConfiguration.id,
        setting.value
      );

      await configurationRepository.createAuditLog(
        existingConfiguration.id,
        existingConfiguration.value,
        setting.value,
        "admin"
      );

    } else {

      const newConfiguration =
        await configurationRepository.createNodeConfiguration(
          nodeId,
          setting.key,
          setting.value
        );

      await configurationRepository.createAuditLog(
        newConfiguration.id,
        null,
        setting.value,
        "admin"
      );

    }
  }

  return await getEffectiveConfiguration(nodeId);
}

module.exports = {
  getHierarchyPath,
  getEffectiveConfiguration,
  updateConfiguration,
};