import PlayBtn from './PlayBtn';
import TeamLogo from '../images/TeamLogo.jpg';
import CompLogo from '../images/CompLogo.png';

// Components
import TeamInfo from './TeamInfo';

const StreamItem = ({
	homeName,
	awayName,
	tipTime,
	homeSlug,
	awaySlug,
	streamLink,
}) => {
	return (
		<div className='stream-item'>
			<div className='stream-item-body'>
				<div className='comp-logo'>
					<img src={CompLogo} alt='' />
				</div>
				<PlayBtn streamLink={streamLink} />
				<div className='teams'>
					<a
						href={`http://127.0.0.1:3000/clubs/${homeSlug}`}
						target='_blank'
						rel='noreferrer'
					>
						<TeamInfo teamName={homeName} teamLogo={TeamLogo} />
					</a>
					<a
						href={`http://127.0.0.1:3000/clubs/${awaySlug}`}
						target='_blank'
						rel='noreferrer'
					>
						<TeamInfo teamName={awayName} teamLogo={TeamLogo} />
					</a>
				</div>
				<div className='tip-time'>
					<p>{tipTime}</p>
				</div>
			</div>
		</div>
	);
};

export default StreamItem;
