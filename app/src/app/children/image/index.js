import React from 'react'
import styles from './styles';
import { getCaptionFromEdges } from '../../../utils/getCaptionFromEdges';

const Image = ({ data }) => {
  return (
    <img
      src={data.display_url}
      style={styles}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
    />
  )
}

export default Image
