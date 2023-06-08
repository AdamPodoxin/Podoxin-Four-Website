import { Metadata } from "next";
import { getImages } from "@/lib/api/gallery";
import { Title } from "@/components/Typography";
import Gallery from "./Gallery";

export const metadata: Metadata = {
	title: "Gallery",
};

const GalleryWrapper = async () => {
	const images = await getImages();

	return (
		<>
			<Title>Gallery</Title>
			<Gallery images={images} />
		</>
	);
};

export default GalleryWrapper;
