import React from 'react';
import CommentBlock from './children/comments_block';
import Image from './children/image';
import UserBlock from './children/user_block';
import ImageDataBlock from './children/image_data_block';
import styles from './styles';

const App = ({ data }) => {
  console.log(data);
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserBlock owner={data.owner} location={data.location} />
        <CommentBlock data={data} />
        <ImageDataBlock />
      </div>
    </main>
  );
};

export default App;
