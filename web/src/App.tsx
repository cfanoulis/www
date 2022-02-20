import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';
import './index.css';

const App = () => (
	<FatalErrorBoundary page={FatalErrorPage}>
		<RedwoodProvider titleTemplate="%AppTitle">
			<Routes />
		</RedwoodProvider>
	</FatalErrorBoundary>
);

export default App;
