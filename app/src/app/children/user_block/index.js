import React from 'react'
import styles from './styles'

const UserBlock = ({ owner, location }) => (
  <div style={styles.userBlock}>
    <img
      src={owner.profile_pic_url}
      width="51px"
      height="50px"
      alt={`${owner.full_name} profile`}
    />
    <div style={styles.userText}>
      <b style={styles.username}>{owner.username}</b>
      <small>{location.name}</small>
    </div>
  </div>
);

export default UserBlock;
