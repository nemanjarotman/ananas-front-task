import { Comment, Post, User } from '../types/types'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return await response.json()
}

export const getPost = async (postId: string | undefined): Promise<Post> => {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return await response.json()
}

export const getAllUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return await response.json()
}

export const getAllComments = async (): Promise<Comment[]> => {
  const response = await fetch(`${API_URL}/comments`, {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return await response.json()
}

export const getCommentsByPost = async (
  postId: string | undefined
): Promise<Comment[]> => {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
    method: 'GET',
  })
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return await response.json()
}
