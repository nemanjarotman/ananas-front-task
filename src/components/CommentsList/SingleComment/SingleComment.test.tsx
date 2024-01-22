import { FC } from 'react'
import { render, screen } from '@testing-library/react'
import SingleComment from './SingleComment'

jest.mock('hocs/withLogging/withLogging', () => (Component: FC) => Component)

const mockComment = {
  id: 1,
  name: 'Test Comment',
}

describe('SingleComment', () => {
  it('renders comment name', () => {
    render(<SingleComment comment={mockComment} />)
    const commentNameElement = screen.getByText('Test Comment')
    expect(commentNameElement).toBeInTheDocument()
  })
})
