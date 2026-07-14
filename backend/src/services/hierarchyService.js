const hierarchyRepository = require("../repositories/hierarchyRepository");

async function getHierarchy() {
  return await hierarchyRepository.getHierarchy();
}

module.exports = {
  getHierarchy,
};