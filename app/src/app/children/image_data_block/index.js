import React from 'react'
import dayjs from 'dayjs'
import { createUseStyles } from 'react-jss'
import relativeTime from 'dayjs/plugin/relativeTime'
import LikeButton from '../like_button'
import styles from './styles'

dayjs.extend(relativeTime)
const useStyles = createUseStyles(styles)

const ImageDataBlock = ({ takenTimestamp, likeCount, setLikeCount }) => {
  const classes = useStyles()

  const dateFourDaysAfter = dayjs.unix(takenTimestamp).add(4, 'days')
  const formattedDate = dayjs.unix(takenTimestamp).from(dateFourDaysAfter)

  return (
    <div className={classes.imageData}>
      <div className={classes.dataHolder}>
        <strong>{`${likeCount.toLocaleString()} likes`}</strong>
        <small className={classes.smallText}>{formattedDate}</small>
      </div>

      <div className={classes.likeButton}>
        <LikeButton setLikeCount={setLikeCount} likeCount={likeCount} />
      </div>
    </div>
  )
}

export default ImageDataBlock
