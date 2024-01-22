import {
  getPosts,
  getPost,
  getAllUsers,
  getAllComments,
  getCommentsByPost,
} from './api'

describe('API functions', () => {
  test('getPosts returns an array of posts', async () => {
    expect.assertions(1)
    const posts = await getPosts()
    expect(posts).toBeInstanceOf(Array)
  })

  test('getPost returns a single post', async () => {
    expect.assertions(1)
    const postId = '1'
    const post = await getPost(postId)
    expect(post).toHaveProperty('id', parseInt(postId, 10))
  })

  test('getAllUsers returns an array of users', async () => {
    expect.assertions(1)
    const users = await getAllUsers()
    expect(users).toBeInstanceOf(Array)
  })

  test('getAllComments returns an array of comments', async () => {
    expect.assertions(1)
    const comments = await getAllComments()
    expect(comments).toBeInstanceOf(Array)
  })

  test('getCommentsByPost returns an array of comments for a specific post', async () => {
    expect.assertions(1)
    const postId = '1'
    const comments = await getCommentsByPost(postId)
    expect(comments).toBeInstanceOf(Array)
  })
})
