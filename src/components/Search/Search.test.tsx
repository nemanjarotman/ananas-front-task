import { render, fireEvent, screen } from '@testing-library/react'
import Search from './Search'

describe('Search component', () => {
  test('calls onSearch prop with correct query when button is clicked', () => {
    const onSearchMock = jest.fn()
    render(<Search onSearch={onSearchMock} />)

    const inputElement = screen.getByPlaceholderText('Search')
    const buttonElement = screen.getByText('Search')

    fireEvent.change(inputElement, { target: { value: 'test query' } })
    fireEvent.click(buttonElement)

    expect(onSearchMock).toHaveBeenCalledWith('test query')
  })

  test('updates searchQuery state when input value changes', () => {
    const onSearchMock = jest.fn()
    render(<Search onSearch={onSearchMock} />)

    const inputElement = screen.getByPlaceholderText('Search')

    fireEvent.change(inputElement, { target: { value: 'updated query' } })

    expect(inputElement).toHaveValue('updated query')
  })
})
