import { render, screen, fireEvent } from '@testing-library/react'
import { EmailField } from './EmailField'
import { ThemeProvider } from '../../themes/ThemeProvider'

const setup = () =>
  render(
    <ThemeProvider>
      <EmailField />
    </ThemeProvider>
  )

const getButtonAddEmail = () =>
  screen.getByRole('button', {
    name: /Email/i,
  })

const queryButtonAddEmail = () =>
  screen.queryByRole('button', {
    name: /Email/i,
  })

const getInputEnterEmail = () => screen.getByPlaceholderText(/Type or paste emails.../i)

const queryInputEnterEmail = () => screen.queryByPlaceholderText(/Type or paste emails.../i)

test('renders emailField', () => {
  setup()
  expect(getButtonAddEmail()).toBeDefined()
})

test('should add email', () => {
  setup()

  const button = getButtonAddEmail()
  fireEvent.click(button)
  fireEvent.change(getInputEnterEmail(), { target: { value: 'test@indr.com' } })
  expect(queryButtonAddEmail()).toBeNull()

  fireEvent.keyDown(getInputEnterEmail(), {
    key: 'Escape',
    code: 'Escape',
    keyCode: 27,
    charCode: 27,
  })

  expect(queryInputEnterEmail()).toBeNull()
  expect(screen.getByText(/test@indr\.com/i)).toBeDefined()
})

test('should delete email', () => {
  render(
    <ThemeProvider>
      <EmailField defaultValue={['apple', 'test@indr.com']} />
    </ThemeProvider>
  )

  expect(screen.getByText(/apple/i)).toBeDefined()
  expect(screen.getByText(/test@indr\.com/i)).toBeDefined()

  const deleteButtonErrorTag = screen.getByRole('button', {
    name: /Delete apple/i,
  })
  fireEvent.click(deleteButtonErrorTag)

  expect(screen.queryByText(/apple/i)).toBeNull()
  expect(screen.getByText(/test@indr\.com/i)).toBeDefined()
})
