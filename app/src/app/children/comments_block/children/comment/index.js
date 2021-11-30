import React from 'react';
import LikeButton from '../../../like_button';
import { formatCommentIntoHTML } from '../../../../../utils/formatCommentIntoHTML';
import styles from './styles';

const Comment = ({ user, comment, removeLikeButton }) => (
  <div style={styles.comment}>
    <p style={styles.commentHolder}>
      <b style={styles.commentUsername}>{user}</b>
      <span style={styles.commentText} dangerouslySetInnerHTML={formatCommentIntoHTML(comment)} />
    </p>

    {!removeLikeButton && <LikeButton height={12} />}
  </div>
);

export default Comment;
