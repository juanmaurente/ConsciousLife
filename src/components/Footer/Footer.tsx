import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faLinkedin,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.${styles.nav}`,
				start: 'top center',
			},
		});

		tl.from(`.${styles.footerList} li`, {
			opacity: 0,
			delay: 0.5,
			y: 20,
			stagger: 0.2,
			duration: 0.3,
		});
	}, []);

	return (
		<footer className={styles.footer}>
			<ul className={styles.footerList}>
				<li>
					<a
						href='https://www.instagram.com'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
				<li>
					<a
						href='https://www.facebook.com'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
