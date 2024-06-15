// src/components/Navbar/Navbar.jsx
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Navbar.module.css';
import { useGSAP } from '@gsap/react';

interface Props {
	onNavClick: () => void;
}

const Navbar = ({ onNavClick }: Props) => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.${styles.nav}`,
				start: 'top center',
			},
		});

		tl.from(`.${styles.navList} li`, {
			opacity: 0,
			y: 20,
			stagger: 0.2,
			duration: 0.3,
		});
	}, []);

	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li>
					<a href='#home' onClick={() => onNavClick()}>
						Home
					</a>
				</li>
				<li>
					<a href='#about' onClick={() => onNavClick()}>
						About
					</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
