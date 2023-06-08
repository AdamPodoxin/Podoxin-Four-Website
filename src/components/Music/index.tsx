import { MusicType } from "@/lib/api/music";
import styles from "./music.module.css";

const Video = ({ embedLink }: { embedLink: string }) => (
	<iframe
		src={embedLink}
		allow="autoplay; encrypted-media"
		allowFullScreen
		className={styles.video}
	/>
);

const MusicGrid = ({ music }: { music: MusicType[] }) => (
	<section id={styles.musicGrid}>
		{music.map((music) => (
			<Video embedLink={music.embed_link} key={music.id} />
		))}
	</section>
);

export default MusicGrid;
