const pool = require("../config/db");

async function getHierarchy() {
  const query = `
    SELECT
      id,
      parent_id,
      name,
      type
    FROM hierarchy
    ORDER BY id;
  `;

  const { rows } = await pool.query(query);

  return rows;
}

module.exports = {
  getHierarchy,
};