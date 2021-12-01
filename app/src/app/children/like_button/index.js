import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'
import styles from './styles'

const useStyles = createUseStyles(styles)

const LikeButton = ({ height, likeCount, setLikeCount }) => {
  const classes = useStyles()
  const [buttonActive, setButtonActive] = useState(false)

  const toggleButtonActive = () => {
    setButtonActive(!buttonActive)

    if (likeCount) {
      const counter = buttonActive ? -1 : 1
      setLikeCount(likeCount + counter)
    }
  }

  return (
    <button data-testid='like-button' className={classes.button} type='button' onClick={toggleButtonActive} aria-label='Like Button'>
      {buttonActive
        ? (
          <LikedIcon height={height} />
          )
        : (
          <UnlikedIcon height={height} />
          )}
    </button>
  )
}

export default LikeButton
