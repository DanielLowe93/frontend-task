import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const UserBlock = ({ owner, location }) => {
  const classes = useStyles();

  return (
    <div className={classes.userBlock}>
      <img
        src={owner.profile_pic_url}
        width="51px"
        height="50px"
        alt={`${owner.full_name} profile`}
      />
      <div className={classes.userText}>
        <strong className={classes.username}>{owner.username}</strong>
        <small>{location.name}</small>
      </div>
    </div>
  );
}

export default UserBlock;
