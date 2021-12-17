import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const blogTitle = screen.getByText(/blog/i)
  expect(blogTitle).toBeInTheDocument()
})
