import React from 'react';
import ReactDOM from 'react-dom';
import { DashboardPage } from './pages';
import {Provider} from 'react-redux';
import store from './storeConfig';
import history from './history';
import './styles/main.scss';

import {Router} from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<DashboardPage />
		</Router>
	</Provider>
	, document.getElementById('root'));
