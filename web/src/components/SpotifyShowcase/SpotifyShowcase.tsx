import { value useLanyard } from 'use-lanyard';

const SpotifyShowcase = ({ className }: { className?: string }) => {
	const lanyard = useLanyard('489096182069461003');

	return typeof lanyard.data === 'undefined' || !lanyard.data.listening_to_spotify ? (
		<></>
	) : (
		<p className={`${className} pt-2`} style={{ fontVariant: 'all-small-caps' }}>
			streaming: <strong className="font-bold">{lanyard.data.spotify.song}</strong> by{' '}
			<strong className="font-bold">{lanyard.data.spotify.artist}</strong>
		</p>
	);
};

export default SpotifyShowcase;
