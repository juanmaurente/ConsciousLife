import ContactButton from '../ContactButton/ContactButton';
import MiniHeader from '../MiniHeader/MiniHeader';
import styles from './Hero.module.css';
import photo from '../../assets/DALL·E 2024-06-03 23.17.10 - A person standing on top of a mountain at midday, in a calm, meditative pose. The background features lush greenery, with trees and plants creating a .webp';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={`container ${styles.heroContent}`}>
				<div className={styles.card}>
					<div className={styles.cardImage}>
						<img src={photo} alt='' srcset='' />
					</div>
					<div className={styles.cardInfo}>
						<MiniHeader text='Conscious Life' />
						<h1 className={styles.cardTitle}>
							Empower Your Mind, Unleash Your Potential
						</h1>
						<ContactButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
