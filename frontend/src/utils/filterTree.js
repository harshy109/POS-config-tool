function findNode(lowerCaseSearchTerm, node){
  if (node.name.toLowerCase().includes(lowerCaseSearchTerm)) {
      console.log("FOund in node:", node);
      return node;
    } 
    else if(node.children == null){
        return;
    }
    else if (node.children !== null) {
      console.log("Search again in :", node.children);
      return filterTree(lowerCaseSearchTerm, node.children);
    }
}

export function filterTree(searchTerm, tree) {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  console.log(lowerCaseSearchTerm);
   for(let i = 0; i<tree.length; i++){
      const node = tree[i];
      var result = findNode(lowerCaseSearchTerm, node);
      if(result){
        break;
      }
    
  }
  return result;
}


