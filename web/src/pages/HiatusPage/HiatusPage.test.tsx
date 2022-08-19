import { render } from '@redwoodjs/testing/web'

import HiatusPage from './HiatusPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HiatusPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HiatusPage />)
    }).not.toThrow()
  })
})
