const pool = require("../config/db");

async function getHierarchyPath(nodeId) {

    const query = `
        WITH RECURSIVE hierarchy_path AS (

            SELECT
                id,
                parent_id,
                name,
                type

            FROM hierarchy

            WHERE id = $1

            UNION ALL

            SELECT
                h.id,
                h.parent_id,
                h.name,
                h.type

            FROM hierarchy h

            INNER JOIN hierarchy_path hp

                ON hp.parent_id = h.id

        )

        SELECT *

        FROM hierarchy_path;
    `;

    const { rows } = await pool.query(query,[nodeId]);

    return rows;

}

async function getNodeConfigurations(nodeIds) {
  const query = `
    SELECT
      nc.node_id,
      ck.key_name,
      ck.display_name,
      nc.value,
      nc.is_override
    FROM node_configurations nc
    JOIN configuration_keys ck
      ON ck.id = nc.configuration_key_id
    WHERE nc.node_id = ANY($1::int[])
    ORDER BY nc.node_id;
  `;

  const { rows } = await pool.query(query, [nodeIds]);

  return rows;
}

async function findNodeConfiguration(nodeId, keyName) {

  const query = `
    SELECT
      nc.id,
      nc.value,
      ck.key_name
    FROM node_configurations nc
    JOIN configuration_keys ck
      ON ck.id = nc.configuration_key_id
    WHERE nc.node_id = $1
      AND ck.key_name = $2;
  `;

  const { rows } = await pool.query(query, [nodeId, keyName]);

  return rows[0];
}

async function updateNodeConfiguration(configurationId, value) {

  const query = `
    UPDATE node_configurations
    SET
      value = $1,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $2;
  `;

  await pool.query(query, [value, configurationId]);

}

async function createNodeConfiguration(nodeId, keyName, value) {

  const query = `
    INSERT INTO node_configurations
      (node_id, configuration_key_id, value, is_override)
    VALUES (
      $1,
      (
        SELECT id
        FROM configuration_keys
        WHERE key_name = $2
      ),
      $3,
      true
    )
    RETURNING id;
  `;

  const { rows } = await pool.query(query, [
    nodeId,
    keyName,
    value,
  ]);

  return rows[0];
}

async function createAuditLog(
  configurationId,
  oldValue,
  newValue,
  updatedBy
) {

  const query = `
    INSERT INTO audit_logs
      (
        configuration_id,
        old_value,
        new_value,
        updated_by
      )
    VALUES ($1, $2, $3, $4);
  `;

  await pool.query(query, [
    configurationId,
    oldValue,
    newValue,
    updatedBy,
  ]);

}

module.exports = {
  getHierarchyPath,
  getNodeConfigurations,
  findNodeConfiguration,
  updateNodeConfiguration,
  createNodeConfiguration,
  createAuditLog,
};