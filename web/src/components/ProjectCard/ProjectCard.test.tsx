import { render } from '@redwoodjs/testing/web';
import ProjectCard from './ProjectCard';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectCard', () => {
	it('renders successfully', () => {
		expect(() => {
			render(<ProjectCard />);
		}).not.toThrow();
	});
});
