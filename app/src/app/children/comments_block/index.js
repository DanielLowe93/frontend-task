import React from 'react';
import { getCaptionFromEdges } from '../../../utils/getCaptionFromEdges';
import { getUserFromCommentEdge } from '../../../utils/getUserFromCommentEdge';
import { getCommentFromCommentEdge } from '../../../utils/getCommentFromCommentEdge';
import Comment from './children/comment';
import styles from './styles';

const CommentBlock = ({ data }) => (
  <div style={styles.commentBlock}>
    <div style={styles.mainComment}>
      <Comment
        user={data.owner.username}
        comment={getCaptionFromEdges(data.edge_media_to_caption)}
        removeLikeButton={true}
      />
    </div>

    {data.edge_media_to_comment.edges.map((edge) => (
      <Comment
        key={edge.node.id}
        user={getUserFromCommentEdge(edge)}
        comment={getCommentFromCommentEdge(edge)}
      />
    ))}
  </div>
);

export default CommentBlock;
