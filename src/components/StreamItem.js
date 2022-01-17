const StreamItem = ({ homeName, awayName }) => {
	return (
		<div className='stream-item'>
			<div className='team-info'>
				<div className='home-team'>{homeName}</div>
				<div className='away-team'>{awayName}</div>
			</div>
			<div className='play-btn'>PLAY</div>
		</div>
	);
};

export default StreamItem;
