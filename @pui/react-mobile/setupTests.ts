// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'TextEncoder', { writable: true, value: TextEncoder });
  Object.defineProperty(window, 'TextDecoder', { writable: true, value: TextDecoder });
}
