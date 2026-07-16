const hierarchyRepository = require("../repositories/hierarchyRepository");

function buildTree(nodes) {
  const nodeMap = {};
  const tree = [];

  // Create lookup map
  nodes.forEach((node) => {
    nodeMap[node.id] = {
      ...node,
      children: [],
    };
  });

  // Connect parent-child
  nodes.forEach((node) => {
    if (node.parent_id === null) {
      tree.push(nodeMap[node.id]);
    } else {
      nodeMap[node.parent_id].children.push(nodeMap[node.id]);
    }
  });

  return tree;
}

async function getHierarchy() {
  const nodes = await hierarchyRepository.getHierarchy();

  return buildTree(nodes);
}

module.exports = {
  getHierarchy,
};