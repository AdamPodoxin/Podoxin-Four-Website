import { ReactNode, createContext, useContext, useState } from "react";

export type NavbarContextType = {
	isOpen: boolean;
	setOpen: (open: boolean) => void;
	images: string[];
	setImages: (images: string[]) => void;
	currentImageIndex: number;
	setImage: (imageIndex: number) => void;
	incrementImage: (increment: number) => void;
};

const GalleryContext = createContext<NavbarContextType>({
	isOpen: false,
	setOpen: () => {},
	images: [],
	setImages: () => {},
	currentImageIndex: 0,
	setImage: () => {},
	incrementImage: () => {},
});

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setOpen] = useState(false);
	const [images, setImages] = useState<string[]>([]);
	const [currentImageIndex, setImage] = useState(0);

	const incrementImage = (increment: number) => {
		setImage((currentImageIndex + increment + images.length) % images.length);
	};

	return (
		<GalleryContext.Provider
			value={{
				isOpen,
				setOpen,
				images,
				setImages,
				currentImageIndex,
				setImage,
				incrementImage,
			}}
		>
			{children}
		</GalleryContext.Provider>
	);
};

export const useGallery = () => useContext(GalleryContext);
