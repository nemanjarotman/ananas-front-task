import { FC, useState } from 'react'
import { getAllUsers, getPosts } from 'api/api'
import SinglePost from 'components/SinglePost/SinglePost'
import withLogging from 'hocs/withLogging/withLogging'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import Search from '../../components/Search/Search'

interface IPostListProps {
  searchQuery: string
}

const PostList: FC<IPostListProps> = ({ searchQuery }) => {
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

  if (isPostsLoading || isUsersLoading) {
    return <p>Loading...</p>
  }

  if (isPostsError) {
    return <p>Error fetching posts</p>
  }

  if (isUsersError) {
    return <p>Error fetching user</p>
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
        <SinglePost users={users} post={post} key={post.id} />
      ))}
    </div>
  )
}

export default withLogging(PostList)
