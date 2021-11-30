import React from 'react';
import { createUseStyles } from 'react-jss';
import CommentBlock from './children/comments_block';
import Image from './children/image';
import UserBlock from './children/user_block';
import styles from './styles';

const useStyles = createUseStyles(styles);

const App = ({ data }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.image}>
        <Image data={data} />
      </div>
      <div className={classes.text}>
        <UserBlock owner={data.owner} location={data.location} />
        <CommentBlock data={data} />
      </div>
    </main>
  );
};

export default App;
