import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import CommentBlock from './children/comments_block';
import Image from './children/image';
import UserBlock from './children/user_block';
import ImageDataBlock from './children/image_data_block';
import styles from './styles';

const useStyles = createUseStyles(styles);

const App = ({ data }) => {
  const classes = useStyles();
  const [likeCount, setLikeCount] = useState(data.edge_media_preview_like.count);

  return (
    <main className={classes.main}>
      <div className={classes.image}>
        <Image data={data} />
      </div>
      <div className={classes.text}>
        <UserBlock owner={data.owner} location={data.location} />
        <CommentBlock data={data} />
        <ImageDataBlock
          takenTimestamp={data.taken_at_timestamp}
          likeCount={likeCount}
          setLikeCount={setLikeCount}
        />
      </div>
    </main>
  );
};

export default App;
