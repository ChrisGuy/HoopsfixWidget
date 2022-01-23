const TeamInfo = ({ teamLogo, teamName }) => {
	return (
		<div className='team-info'>
			<div className='name'>
				<p>{teamName}</p>
			</div>
			<div className='logo'>
				<img src={teamLogo} alt={teamName} />
			</div>
		</div>
	);
};

export default TeamInfo;
