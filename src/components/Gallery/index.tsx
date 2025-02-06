import Image from "next/image";
import { useGallery } from "@/app/gallery/GalleryContext";
import styles from "./gallery.module.css";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { enableScroll } from "@/lib/util/scrollUtil";

const GalleryImage = ({
	image,
	isMobile,
	openModal,
}: {
	image: string;
	isMobile: boolean;
	openModal: () => void;
}) => (
	<span className={styles.galleryImage}>
		<Image
			src={image}
			alt=""
			width={600}
			height={600}
			onClick={isMobile ? undefined : () => openModal()}
		/>
	</span>
);

const GalleryGrid = ({ images }: { images: string[] }) => {
	const isMobile = useIsMobile();
	const { setOpen, setImage } = useGallery();

	return (
		<section id={styles.galleryGrid}>
			{images.map((image, i) => (
				<GalleryImage
					image={image}
					isMobile={isMobile}
					key={i}
					openModal={() => {
						enableScroll(false);
						setImage(i);
						setOpen(true);
					}}
				/>
			))}
		</section>
	);
};

export default GalleryGrid;
