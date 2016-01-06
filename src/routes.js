// Dependencies.
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';

// Pages.
import LoginPage from './modules/global/pages/login';
import HomePage from './modules/global/pages/home';
import DataPage from './modules/global/pages/data';
import DocMgtPage from './modules/document-management/home';
import DocMgtPage2 from './modules/document-management/home2';


// Routes template.
export default (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={LoginPage} title="Login Page" />
		<Route path="/home" component={HomePage} title="Home" />
		<Route path="data" component={DataPage} title="Data Sample Page" />
		<Route path="document-management" component={DocMgtPage} title="Document Management" />
		<Route path="document-management2" component={DocMgtPage2} title="Document Management 2" />
	</Router>
);
