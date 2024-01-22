import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Comment } from 'types/types'
import withLogging from 'hocs/withLogging/withLogging'
import SingleComment from './SingleComment/SingleComment'
import styles from './styles.module.scss'

interface ICommentListProps {
  postId: number
  comments: Comment[]
}

const CommentsList: FC<ICommentListProps> = ({ postId, comments }) => {
  const location = useLocation()

  let renderedComments: Comment[] = []

  if (location.pathname === '/posts') {
    renderedComments =
      comments?.filter((comment) => comment.postId === postId) || []
  } else if (location.pathname === `/post/${postId}`) {
    renderedComments = comments || []
  }

  return (
    <div className={styles.commentsList}>
      {renderedComments?.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

export default withLogging(CommentsList)
