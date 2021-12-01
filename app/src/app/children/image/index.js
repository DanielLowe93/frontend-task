import React from 'react';
import { createUseStyles } from 'react-jss'
import { getCaptionFromEdges } from '../../../utils/getCaptionFromEdges';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Image = ({ data }) => {
  const classes = useStyles();

  return (
    <img
      data-testid="image"
      src={data.display_url}
      className={classes.image}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
    />
  )
}

export default Image
