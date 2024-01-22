import { FC } from 'react'
import { render } from '@testing-library/react'
import withLogging from './withLogging'

console.log = jest.fn()

const Component: FC = () => <div>Component</div>

describe('withLogging', () => {
  it('logs the hello message on mount', () => {
    const WrappedComponent = withLogging(Component)
    render(<WrappedComponent />)

    expect(console.log).toHaveBeenCalledWith('Hello from Component')
  })
})
