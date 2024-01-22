import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Comment, Post, User } from 'types/types'
import withLogging from 'hocs/withLogging/withLogging'
import CommentsList from '../CommentsList/CommentsList'
import styles from './styles.module.scss'

interface IPostProps {
  post: Post
  users: User[]
  comments: Comment[]
}

const SinglePost: FC<IPostProps> = ({ post, users, comments }) => {
  const user = users?.find((user) => user.id === post.userId)

  return (
    <>
      <Link to={`/post/${post.id}`} className={styles.post}>
        <h4 className={styles.userName}>By: {user?.name}</h4>
        <h2>{post.title}</h2>
      </Link>
      <CommentsList postId={post.id} comments={comments} />
    </>
  )
}

export default withLogging(SinglePost)
