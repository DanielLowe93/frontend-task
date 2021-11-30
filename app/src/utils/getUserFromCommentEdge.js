export function getUserFromCommentEdge (edge) {
  console.log(edge);
  return edge.node.owner.username
};