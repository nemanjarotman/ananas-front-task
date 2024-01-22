import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCommentsByPost, getPost } from 'api/api'
import withLogging from 'hocs/withLogging/withLogging'
import CommentsList from 'components/CommentsList/CommentsList'
import styles from './styles.module.scss'

const PostDetails: FC = () => {
  const { id } = useParams<{ id: string | undefined }>()

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isPostError,
  } = useQuery({
    queryFn: () => getPost(id),
    queryKey: ['post'],
  })

  const {
    data: commentsByPost,
    isLoading: isLoadingComments,
    isError: isCommentsError,
  } = useQuery({
    queryFn: () => getCommentsByPost(id),
    queryKey: ['commentsByPost', id],
  })

  if (isLoadingPost || isLoadingComments) {
    return <p>Loading...</p>
  }

  if (isPostError) {
    return <p>Error fetching post</p>
  }

  if (isCommentsError) {
    return <p>Error fetching comments</p>
  }

  return (
    <>
      <div className={styles.postDetails}>
        <h2 className={styles.title}>{post?.title}</h2>
        <div className={styles.postBody}>{post?.body}</div>
        <CommentsList postId={id} comments={commentsByPost} />
      </div>
    </>
  )
}

export default withLogging(PostDetails)
