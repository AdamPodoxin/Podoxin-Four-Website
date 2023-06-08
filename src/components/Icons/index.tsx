import Image from "next/image";
import burgerMenu from "../../assets/icons/burger-menu.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import closeIcon from "../../assets/icons/close-icon.svg";

export const HamburgerMenu = ({ id }: { id?: string }) => (
	<Image priority src={burgerMenu} alt="Hamburger menu" id={id} />
);

export const ArrowRight = () => (
	<Image priority src={arrowRight} alt="Arrow right" />
);

export const CloseIcon = () => (
	<Image priority src={closeIcon} alt="Close icon" />
);
