import { FC } from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SinglePost from './SinglePost'

jest.mock('hocs/withLogging/withLogging', () => (Component: FC) => Component)

const mockPost = {
  id: 1,
  title: 'Test Post',
  userId: 1,
}

const mockUsers = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
]

const queryClient = new QueryClient()

describe('SinglePost', () => {
  const renderComponent = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <SinglePost post={mockPost} users={mockUsers} />
        </Router>
      </QueryClientProvider>
    )

  it('renders post title and user name', async () => {
    renderComponent()
  })
})
