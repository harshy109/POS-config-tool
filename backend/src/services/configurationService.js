const configurationRepository =
  require("../repositories/configurationRepository");
const pool = require("../config/db");

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

  const client = await pool.connect();
try{
  await client.query("BEGIN");

  for (const setting of settings) {

    const existingConfiguration =
      await configurationRepository.findNodeConfiguration(
        client,
        nodeId,
        setting.key
      );

    if (existingConfiguration) {

      await configurationRepository.updateNodeConfiguration(
        client,
        existingConfiguration.id,
        setting.value
      );

      await configurationRepository.createAuditLog(
        client,
        existingConfiguration.id,
        existingConfiguration.value,
        setting.value,
        "admin"
      );

    } else {

      const newConfiguration =
        await configurationRepository.createNodeConfiguration(
          client,
          nodeId,
          setting.key,
          setting.value
        );

      await configurationRepository.createAuditLog(
        client,
        newConfiguration.id,
        null,
        setting.value,
        "admin"
      );
    }
  }
  
  await client.query("COMMIT");

  return await getEffectiveConfiguration(nodeId);
}
catch (error) {

    await client.query("ROLLBACK");

    throw error;

}
finally {

    client.release();

}
}

module.exports = {
  getHierarchyPath,
  getEffectiveConfiguration,
  updateConfiguration,
};