export function formatCommentIntoHTML (comment) {
  return ({
    __html: comment.replace(/#(\S*)/g,'<span style=color:#436490>#$1</span>')
  });
};