import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// COMPONENTS

import StreamItem from './components/StreamItem';
import NavBtn from './components/NavBtn';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [gameData, setGameData] = useState([]);
	const [clubs, setClubs] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [filters, setFilters] = useState({});
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		setFilters({
			club: 'all',
			dateFilter: 'upcoming',
		});
	}, []);

	useEffect(() => {
		if (isLoading) {
			const fetchData = async () => {
				const response = await axios('/games.json');
				setGameData(response.data);
				setFilteredData(gameData);
			};
			fetchData();
			setIsLoading(false);
		}
	}, [isLoading]);

	useEffect(() => {
		if (isLoading) {
			const fetchData = async () => {
				setIsLoading(true);
				const response = await axios('/clubs.json');
				setClubs(response.data);
			};
			fetchData();
			setIsLoading(false);
		}
	}, [isLoading]);

	const handleFilterChange = (e) => {
		setFilters({ ...filters, [e.target.id]: e.target.value });
	};

	const filterTeam = () => {
		let filteredTeamData = [];
		const today = new Date();

		if (filters.club === 'all') {
			filteredTeamData = gameData;
		} else {
			gameData.map((game) => {
				if (
					game.home_club.id === Number(filters.club) ||
					game.away_club.id === Number(filters.club)
				) {
					filteredTeamData.push(game);
				}
				return filteredTeamData;
			});
		}

		if (filters.dateFilter === 'upcoming') {
			filteredTeamData = filteredTeamData.filter(
				(game) => new Date(game.date) > today
			);
		} else {
			filteredTeamData = filteredTeamData.filter(
				(game) => new Date(game.date) < today
			);
		}

		setFilteredData(filteredTeamData);
	};

	useEffect(() => {
		filterTeam();
		console.log(filters.dateFilter);
		console.log(filteredData);
	}, [filters]);

	const handleScrollRight = (e) => {
		setActiveIndex(activeIndex + 1);
	};

	const handleScrollLeft = (e) => {
		setActiveIndex(activeIndex - 1);
	};

	useEffect(() => {
		console.log(activeIndex);
	}, [activeIndex]);

	return (
		<div className='App'>
			<div className='stream-wrapper'>
				<div className='widget-filters'>
					<select name='' id='club' onChange={handleFilterChange}>
						<option value='' disabled selected>
							Select Club
						</option>
						<option value='all'>All Clubs</option>

						{clubs
							? clubs.map((club, i) => {
									return (
										<option key={i} value={club.id}>
											{club.name}
										</option>
									);
							  })
							: null}
					</select>
					<select name='' id='dateFilter' onChange={handleFilterChange}>
						<option value='upcoming'>Upcoming Streams</option>
						<option value='past'>Past Streams</option>
					</select>
				</div>
				{activeIndex === 0 ? null : (
					<NavBtn icon='<' side='left' direction={handleScrollLeft} />
				)}
				<div className='stream-items'>
					{isLoading ? (
						<h1>Loading...</h1>
					) : filteredData.length > 0 ? (
						filteredData.map((game, i) => {
							return (
								<StreamItem
									homeName={game.home_club.abbreviation}
									awayName={game.away_club.abbreviation}
									homeSlug={game.home_club.slug}
									awaySlug={game.away_club.slug}
									streamLink={`http://localhost:3000/games/${game.home_club.slug}-vs-${game.away_club.slug}`}
									tipTime={new Date(game.tip_time).toLocaleTimeString([], {
										hour: '2-digit',
										minute: '2-digit',
									})}
									key={i}
								/>
							);
						})
					) : (
						<p>No Upcoming Games</p>
					)}
				</div>
				<NavBtn icon='>' side='right' direction={handleScrollRight} />
			</div>
		</div>
	);
}

export default App;
