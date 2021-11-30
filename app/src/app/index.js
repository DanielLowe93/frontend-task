import React from 'react';
import CommentBlock from './children/comments_block';
import Image from './children/image';
import LikeButton from './children/like_button';
import UserBlock from './children/user_block';
import styles from './styles';

const App = ({ data }) => {
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserBlock owner={data.owner} location={data.location} />
        <CommentBlock data={data} />
        <LikeButton />
      </div>
    </main>
  );
};

export default App;
