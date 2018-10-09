import React from 'react';
import ReactDOM from 'react-dom';
import { DashboardPage } from './pages';
import {Provider} from 'react-redux';
import store from './storeConfig';
import './styles/main.scss';

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<DashboardPage />
		</Router>
	</Provider>
	, document.getElementById('root'));
