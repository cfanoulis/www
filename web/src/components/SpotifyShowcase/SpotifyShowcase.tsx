import { useLanyard } from 'use-lanyard';

const SpotifyShowcase = ({ className }: { className?: string }) => {
	const lanyard = useLanyard('489096182069461003');

	return typeof lanyard.data === 'undefined' || !lanyard.data.listening_to_spotify ? (
		<></>
	) : (
		<p className={className ?? ''}>
			I also love listening to music. I&apos;m currently listening to <strong className="font-bold">{lanyard.data.spotify.song}</strong> by{' '}
			<strong className="font-bold">{lanyard.data.spotify.artist}</strong>
		</p>
	);
};

export default SpotifyShowcase;
