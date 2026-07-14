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

module.exports = {

    getHierarchyPath,
    getNodeConfigurations

};