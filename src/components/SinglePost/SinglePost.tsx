import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Post, User } from 'types/types'
import withLogging from 'hocs/withLogging/withLogging'
import CommentsList from '../CommentsList/CommentsList'
import styles from './styles.module.scss'

interface IPostProps {
  post: Post
  users: User[]
}

const SinglePost: FC<IPostProps> = ({ post, users }) => {
  const user = users?.find((user) => user.id === post.userId)

  return (
    <>
      <Link to={`/post/${post.id}`} className={styles.post}>
        <h4 className={styles.userName}>By: {user?.name}</h4>
        <h2>{post.title}</h2>
      </Link>
      <CommentsList postId={post.id} />
    </>
  )
}

export default withLogging(SinglePost)
