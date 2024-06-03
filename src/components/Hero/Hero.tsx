import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={`container ${styles.heroContent}`}>
				<div className={styles.card}>
					<div className={styles.cardImage}>Image</div>
					<div className={styles.cardInfo}>Info</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
