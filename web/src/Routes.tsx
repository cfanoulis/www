// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router } from '@redwoodjs/router';

const Routes = () => {
	return (
		<Router>
			<Route path="/" page={HiatusPage} name="hiatus" prerender />
			{/* <Route path="/projects" page={ProjectsPage} name="projects" /> */}
			{/* <Route path="/" page={LandingPage} name="landing" prerender /> */}
			<Route notfound page={NotFoundPage} prerender />
		</Router>
	);
};

export default Routes;
