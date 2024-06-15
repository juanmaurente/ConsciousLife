import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PageDescription.module.css';
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
		<>
			<div className='welcome'>
				<h1>Conscious Life</h1>
				<h3 className={styles.headerWhite}>
					Empower your mind, unleash your potential
				</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Dolore eius aperiam debitis.
				</p>
			</div>
		</>
	);
};

export default Footer;
