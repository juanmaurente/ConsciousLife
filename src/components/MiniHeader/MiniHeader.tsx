import styles from './MiniHeader.module.css';

interface Props {
	text: string;
}

const MiniHeader = ({ text }: Props) => {
	return <div className={styles.miniHeader}>{text}</div>;
};

export default MiniHeader;
