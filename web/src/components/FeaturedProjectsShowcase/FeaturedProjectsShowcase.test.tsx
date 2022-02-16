import { value render } from '@redwoodjs/testing/web';

import FeaturedProjectsShowcase from './FeaturedProjectsShowcase';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeaturedProjectsShowcase', () => {
	it('renders successfully', () => {
		expect(() => {
			render(<FeaturedProjectsShowcase />);
		}).not.toThrow();
	});
});
