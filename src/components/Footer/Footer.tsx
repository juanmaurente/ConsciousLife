import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';
import { useGSAP } from '@gsap/react';

const Footer = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.${styles.footer}`,
				start: 'top center',
			},
		});

		tl.from(
			`.${styles.footerList} li`,
			{
				delay: 2,
				opacity: 0,
				y: 20,
				stagger: 0.2,
				duration: 0.3,
			},
			'-=0.3',
		);
	}, []);

	return (
		<footer className={styles.footer}>
			<ul className={styles.footerList}>
				<li>
					<a href='#link1'>Link1</a>
				</li>
				<li>
					<a href='#link2'>Link2</a>
				</li>
				<li>
					<a href='#link3'>Link3</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
