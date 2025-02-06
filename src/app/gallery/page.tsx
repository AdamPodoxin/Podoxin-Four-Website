import { Metadata } from "next";
import { Title } from "@/components/Typography";
import { images } from "@/lib/images";
import Gallery from "./Gallery";

export const metadata: Metadata = {
	title: "Gallery",
};

const GalleryWrapper = async () => {
	return (
		<>
			<Title>Gallery</Title>
			<Gallery images={images} />
		</>
	);
};

export default GalleryWrapper;
