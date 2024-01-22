import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPost } from 'api/api'
import withLogging from '../../hocs/withLogging/withLogging'
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

  if (isLoadingPost) {
    return <p>Loading...</p>
  }

  if (isPostError) {
    return <p>Error fetching post</p>
  }

  return (
    <>
      <div className={styles.postDetails}>
        <h2 className={styles.title}>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
    </>
  )
}

export default withLogging(PostDetails)
