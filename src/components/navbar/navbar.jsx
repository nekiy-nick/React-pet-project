import s from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<ul className={s.navbar__list}>
				<li className={s.navbar__item}>
					<a href="" className={s.navbar__link}>About</a>
				</li>
				<li className={s.navbar__item}>
					<a href="" className={s.navbar__link}>About 2</a>
				</li>
				<li className={s.navbar__item}>
					<a href="" className={s.navbar__link}>About 3</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

// app-nav navbar