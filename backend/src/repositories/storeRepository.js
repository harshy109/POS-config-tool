const pool = require("../config/db");

async function createStore(store) {

  const query = `
    INSERT INTO hierarchy
    (
      parent_id,
      store_number,
      name,
      type,
      timezone,
      status
    )
    VALUES
    (
      $1,
      $2,
      $3,
      'store',
      $4,
      $5
    )
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    store.parentId,
    store.storeNumber,
    store.storeName,
    store.timezone,
    store.status
  ]);

  return rows[0];
}

module.exports = {
  createStore
};