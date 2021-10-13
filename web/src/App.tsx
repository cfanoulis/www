import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';
import './index.css';
import './i18n'

const App = () => (
	<FatalErrorBoundary page={FatalErrorPage}>
		<RedwoodProvider titleTemplate="%PageTitle">
			<RedwoodApolloProvider>
				<Routes />
			</RedwoodApolloProvider>
		</RedwoodProvider>
	</FatalErrorBoundary>
);

export default App;
