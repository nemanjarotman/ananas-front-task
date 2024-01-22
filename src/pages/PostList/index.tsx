import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllComments, getAllUsers, getPosts } from 'api/api'
import withLogging from 'hocs/withLogging/withLogging'
import SinglePost from 'components/SinglePost/SinglePost'
import Search from '../../components/Search/Search'
import styles from './styles.module.scss'

const PostList: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useQuery({
    queryFn: () => getPosts(),
    queryKey: ['posts'],
  })

  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useQuery({
    queryFn: () => getAllUsers(),
    queryKey: ['users'],
  })

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery({
    queryFn: () => getAllComments(),
    queryKey: ['comments'],
  })

  if (isPostsLoading || isUsersLoading) {
    return <p>Loading...</p>
  }

  if (isPostsError) {
    return <p>Error fetching posts</p>
  }

  if (isUsersError) {
    return <p>Error fetching user</p>
  }

  if (isCommentsLoading) {
    return <p>Loading...</p>
  }

  if (isCommentsError) {
    return <p>Error fetching comments</p>
  }

  const handleSearch = (query: string) => {
    setSearchTerm(query)
  }

  const filteredPosts = posts?.filter((post) => {
    const user = users?.find((user) => user.id === post.userId)
    const userName = user?.name.toLowerCase()
    return (
      userName?.includes(searchTerm.toLowerCase()) ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className={styles.postList}>
      <Search onSearch={handleSearch} />
      <h2>Posts List</h2>
      {filteredPosts?.map((post) => (
        <SinglePost
          users={users}
          post={post}
          key={post.id}
          comments={comments}
        />
      ))}
    </div>
  )
}

export default withLogging(PostList)
