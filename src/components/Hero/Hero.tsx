import styles from './Hero.module.css';
import aboutPhoto from '../../assets/pexels-pixabay-47059.jpg';
import portfolioPhoto from '../../assets/pexels-yankrukov-8436683.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar/Navbar';

const Hero = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.${styles.welcome}`,
				start: 'top center',
			},
		});

		tl.from(`.aboutPhoto`, {
			opacity: 0,
			x: -15,
			y: -20,
			duration: 0.6,
		}).from(`.servicesPhoto`, {
			opacity: 0,
			y: 20,
			x: 15,
			duration: 0.6,
		});

		tl.from(
			`.title`,
			{
				opacity: 0,
				x: -20,
				duration: 0.3,
			},
			'-=0.2',
		)

			.from(
				`.about`,
				{
					opacity: 0,
					x: -20,
					duration: 0.3,
				},
				'-=0.2',
			)

			.from(
				`.services`,
				{
					opacity: 0,
					x: -20,
					duration: 0.5,
				},
				'-=0.2',
			);
	}, []);

	return (
		<>
			<main>
				<div className={`${styles.panel} ${styles.welcome}`}>
					<Navbar
						onNavClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
					<div className='title'>
						<h1>Conscious Life</h1>
						<h3 className={styles.headerWhite}>
							Empower your mind, unleash your potential
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore eius aperiam debitis.
						</p>
					</div>
					<Footer />
				</div>

				<div className={`${styles.panel} ${styles.about}`}>
					<img src={aboutPhoto} className='aboutPhoto' alt='' />
					<div className={`${styles.aboutText} about`}>
						<h3>About us</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore eius aperiam debitis.
						</p>
						<p>Read More</p>
					</div>
				</div>
				<div className={`${styles.panel} ${styles.services} `}>
					<div className={`${styles.servicesText} services`}>
						<h3>Our Services</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Aperiam iste quae, beatae porro ab neque
							perferendis.
						</p>
						<p>Read More</p>
					</div>
					<img
						src={portfolioPhoto}
						className='servicesPhoto'
						alt=''
					/>
				</div>
			</main>
		</>
	);
};

export default Hero;
