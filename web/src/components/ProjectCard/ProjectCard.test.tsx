import { render } from '@redwoodjs/testing/web'

import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectCard />)
    }).not.toThrow()
  })
})
