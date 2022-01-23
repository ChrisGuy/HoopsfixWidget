import playButton from '../images/Hoopsfix-play.png';

const PlayBtn = ({ streamLink }) => {
	return (
		<div className='btn-wrapper'>
			<a href={streamLink} target='_blank' rel='noreferrer'>
				<div className='play-btn'>
					<img src={playButton} alt='Play' />
				</div>
			</a>
		</div>
	);
};

export default PlayBtn;
