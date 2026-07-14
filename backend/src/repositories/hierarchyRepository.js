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

  const result = await pool.query(query);

  return result.rows;
}

module.exports = {
  getHierarchy,
};