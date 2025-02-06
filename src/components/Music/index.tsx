import styles from "./music.module.css";

const Video = ({ embedLink }: { embedLink: string }) => (
	<iframe
		src={embedLink}
		allow="autoplay; encrypted-media"
		allowFullScreen
		className={styles.video}
	/>
);

const MusicGrid = ({ music }: { music: string[] }) => (
	<section id={styles.musicGrid}>
		{music.map((embedLink, i) => (
			<Video embedLink={embedLink} key={i} />
		))}
	</section>
);

export default MusicGrid;
