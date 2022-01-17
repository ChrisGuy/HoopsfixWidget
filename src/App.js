import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get(`/games.json`)
			.then(setIsLoading(true))
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			});
	}, []);
	console.log(data);
	return (
		<div className='App'>
			{isLoading ? <h1>Loading...</h1> : <h1>Data Received</h1>}
		</div>
	);
}

export default App;
