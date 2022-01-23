const NavBtn = ({ icon, direction, side }) => {
	return (
		<div className={`nav-btn ${side}`} onClick={direction} aria-hidden='true'>
			{icon}
		</div>
	);
};

export default NavBtn;
