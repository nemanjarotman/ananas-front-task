import { FC } from 'react'
import withLogging from 'hocs/withLogging/withLogging'
import { Comment } from 'types/types'
import styles from './styles.module.scss'

interface ICommentProps {
  comment: Comment
}
const SingleComment: FC<ICommentProps> = ({ comment }) => {
  return (
    <div className={styles.singleComment}>
      <p>{comment?.name}</p>
    </div>
  )
}

export default withLogging(SingleComment)
