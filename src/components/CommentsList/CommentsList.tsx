import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllComments } from 'api/api'
import withLogging from 'hocs/withLogging/withLogging'
import SingleComment from './SingleComment/SingleComment'
import styles from './styles.module.scss'

interface ICommentListProps {
  postId: number
}

const CommentsList: FC<ICommentListProps> = ({ postId }) => {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getAllComments(),
    queryKey: ['comments'],
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error fetching comments</p>
  }

  const filteredComments = comments?.filter(
    (comment) => comment.postId === postId
  )

  return (
    <div className={styles.commentsList}>
      {filteredComments?.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

export default withLogging(CommentsList)
