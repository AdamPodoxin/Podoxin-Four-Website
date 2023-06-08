"use client";

import { useEffect } from "react";

import { enableScroll } from "@/lib/util/scrollUtil";
import GalleryGrid from "@/components/Gallery";
import Spinner from "@/components/Spinner";
import { ArrowRight, CloseIcon } from "@/components/Icons";

import { GalleryProvider, useGallery } from "./GalleryContext";

import styles from "./style.module.css";

const GalleryContent = ({ images }: { images: string[] }) => {
	const {
		isOpen: isModalOpen,
		setOpen: toggleModal,
		incrementImage,
		currentImageIndex,
		setImages,
	} = useGallery();

	useEffect(() => {
		setImages(images);
	}, []);

	return (
		<>
			{isModalOpen && (
				<div
					id={styles.modal}
					onClick={() => {
						enableScroll(true);
						toggleModal(false);
					}}
				>
					<div
						style={{ transform: "rotate(180deg)" }}
						onClick={(event) => {
							event.stopPropagation();
							incrementImage(-1);
						}}
					>
						<ArrowRight />
					</div>
					<img
						src={images[currentImageIndex]}
						id={styles.modalImage}
						onClick={(event) => event.stopPropagation()}
					/>
					<div
						onClick={(event) => {
							event.stopPropagation();
							incrementImage(1);
						}}
					>
						<ArrowRight />
					</div>
					<div id={styles.closeButton}>
						<CloseIcon />
					</div>
				</div>
			)}
			{images.length ? <GalleryGrid images={images} /> : <Spinner />}
		</>
	);
};

const Gallery = ({ images }: { images: string[] }) => {
	return (
		<GalleryProvider>
			<GalleryContent images={images} />
		</GalleryProvider>
	);
};

export default Gallery;
