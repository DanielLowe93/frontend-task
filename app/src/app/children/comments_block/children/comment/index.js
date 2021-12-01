import React from 'react';
import { createUseStyles } from 'react-jss';
import LikeButton from '../../../like_button';
import { formatCommentIntoHTML } from '../../../../../utils/formatCommentIntoHTML';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Comment = ({ user, comment, removeLikeButton }) => {
  const classes = useStyles();

  return (
    <div className={classes.comment} data-testid="comment">
      <p className={classes.commentHolder}>
        <strong className={classes.commentUsername}>{user}</strong>
        <span className={classes.commentText} dangerouslySetInnerHTML={formatCommentIntoHTML(comment)} />
      </p>

      {!removeLikeButton && <LikeButton height={12} />}
    </div>
  );
};

export default Comment;
