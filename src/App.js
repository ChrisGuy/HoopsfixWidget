import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// COMPONENTS

import StreamItem from './components/StreamItem';
import NavBtn from './components/NavBtn';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	let [data, setData] = useState(null);
	const [dateFilter, setDateFilter] = useState(0);
	const [pastGames, setPastGames] = useState(null);
	const [upcomingGames, setUpcomingGames] = useState(null);

	useEffect(() => {
		axios
			.get(`/games.json`)
			.then(setIsLoading(true))
			.then((res) => {
				setData(
					res.data.filter((game) => {
						let date = new Date(game.date);
						if (dateFilter) {
							return date < new Date();
						} else {
							return date > new Date();
						}
					})
				);

				setIsLoading(false);
			});
	}, [dateFilter]);

	const handleFilterChange = (e) => {
		setDateFilter(Number(e.target.value));
	};

	console.log(data);

	return (
		<div className='App'>
			<div className='stream-wrapper'>
				<div className='widget-filters'>
					<select name='' id=''>
						<option value=''>Select Club</option>
						<option value=''>Select</option>
						<option value=''>Select</option>
						<option value=''>Select</option>
					</select>
					<select name='' id='' onChange={handleFilterChange}>
						<option value='0'>Upcoming</option>
						<option value='1'>Past</option>
					</select>
				</div>
				{/* <NavBtn icon='<' /> */}
				<div className='stream-items'>
					{isLoading ? (
						<h1>Loading...</h1>
					) : data ? (
						data.map((game, i) => {
							return (
								<StreamItem
									homeName={game.home_club.name}
									awayName={game.away_club.name}
									key={i}
								/>
							);
						})
					) : (
						<p>test</p>
					)}
				</div>
				{/* <NavBtn icon='>' />  */}
			</div>
		</div>
	);
}

export default App;
