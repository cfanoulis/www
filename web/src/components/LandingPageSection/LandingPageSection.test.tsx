import { render } from '@redwoodjs/testing/web';
import LandingPageSection from './LandingPageSection';

describe('LandingPageSection', () => {
	it('renders successfully', () => {
		expect(() => {
			render(<LandingPageSection />);
		}).not.toThrow();
	});
});
