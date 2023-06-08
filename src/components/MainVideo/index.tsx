import styles from "./mainVideo.module.css";

const MainVideo = ({ src }: { src: string }) => {
	return (
		<iframe
			src={src}
			allowFullScreen
			allow="autoplay; encrypted-media"
			id={styles.mainVideo}
		/>
	);
};

export default MainVideo;
