import React from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeButton = ({ height }) => {
  return <UnlikedIcon height={height} />
}

export default LikeButton
