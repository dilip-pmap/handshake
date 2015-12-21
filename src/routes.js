// Dependencies.
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';

// Pages.
import LoginPage from './modules/global/pages/login';
import HomePage from './modules/global/pages/home';
import ToolkitHome from './modules/toolkit/pages/home';
import DataPage from './modules/global/pages/data';
import IconsPage from './modules/global/pages/icon-grid';
import DocMgtPage from './modules/document-management/home';


// Routes template.
export default (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={LoginPage} title="Login Page" />
		<Route path="/home" component={HomePage} title="Home" />
		<Route path="toolkit" component={ToolkitHome} title="Toolkit Page" />
		<Route path="data" component={DataPage} title="Data Sample Page" />
		<Route path="icons" component={IconsPage} title="Icons Page" />
		<Route path="document-management" component={DocMgtPage} title="Document Management" />
	</Router>
);
