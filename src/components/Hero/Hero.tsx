import styles from './Hero.module.css';
import aboutPhoto from '../../assets/pexels-pixabay-47059.jpg';
import portfolioPhoto from '../../assets/pexels-timegrocery-1905054.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Hero = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.${styles.welcome}`,
				start: 'top center',
			},
		});

		tl.from(`.${styles.navList} li`, {
			opacity: 0,
			y: 20,
			stagger: 0.2,
			duration: 0.3,
		})

			.from(
				`.${styles.footerList} li`,
				{
					opacity: 0,
					y: 20,
					stagger: 0.2,
					duration: 0.3,
				},
				'-=0.3',
			)
			.from(
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
				`.portfolio`,
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
					<nav>
						<ul className={styles.navList}>
							<li>
								<a href=''>Home</a>
							</li>
							<li>
								<a href=''>About</a>
							</li>
							<li>
								<a href=''>Gallery</a>
							</li>
							<li>
								<a href=''>Contact</a>
							</li>
						</ul>
					</nav>
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
					<footer>
						<ul className={styles.footerList}>
							<li>
								<a href=''>Link1</a>
							</li>
							<li>
								<a href=''>Link2</a>
							</li>
							<li>
								<a href=''>Link3</a>
							</li>
						</ul>
					</footer>
				</div>

				<div className={`${styles.panel} ${styles.about}`}>
					<img src={aboutPhoto} alt='' />
					<div className={styles.aboutText}>
						<h3>About us</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore eius aperiam debitis.
						</p>
						<p>Read More</p>
					</div>
				</div>
				<div className={`${styles.panel} ${styles.services}`}>
					<div className={styles.servicesText}>
						<h3>Our Services</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Aperiam iste quae, beatae porro ab neque
							perferendis.
						</p>
						<p>Read More</p>
					</div>
					<img src={portfolioPhoto} alt='' />
				</div>
			</main>
		</>
	);
};

export default Hero;
