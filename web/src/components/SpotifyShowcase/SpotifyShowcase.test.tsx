import { render } from '@redwoodjs/testing/web';
import SpotifyShowcase from './SpotifyShowcase';


describe('SpotifyShowcase', () => {
	it('renders successfully', () => {
		expect(() => {
			render(<SpotifyShowcase />);
		}).not.toThrow();
	});
});
