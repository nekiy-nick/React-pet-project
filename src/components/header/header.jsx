import s from './header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img className={s.header__logo} />
			<span>My app</span>
		</header>
	);
};

export default Header;
