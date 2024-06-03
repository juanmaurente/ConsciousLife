import ContactButton from '../ContactButton/ContactButton';
import MiniHeader from '../MiniHeader/MiniHeader';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={`container ${styles.heroContent}`}>
				<div className={styles.card}>
					<div className={styles.cardImage}>Image</div>
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
