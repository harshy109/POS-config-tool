const hierarchyService = require("../services/hierarchyService");

async function getHierarchy(req, res) {
  try {
    const hierarchy = await hierarchyService.getHierarchy();

    res.status(200).json(hierarchy);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch hierarchy",
    });
  }
}

module.exports = {
  getHierarchy,
};