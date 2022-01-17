import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const widgetDiv = document.getElementById('hoopsfix-live-widget');

ReactDOM.render(
	<React.StrictMode>
		<App club={widgetDiv.dataset.club} />
	</React.StrictMode>,
	widgetDiv
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
