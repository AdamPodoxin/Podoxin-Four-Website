import { enableScroll } from "@/lib/util/scrollUtil";
import styles from "./navBar.module.css";
import { HamburgerMenu } from "../Icons";
import { useNavbar } from "./NavbarContext";

const NavbarToggle = () => {
	const { isOpen, setOpen } = useNavbar();

	return (
		<>
			<input
				type="checkbox"
				checked={isOpen}
				id={styles.navbarToggle}
				onChange={(event) => {
					setOpen(!isOpen);
					enableScroll(!event.target.checked);
				}}
			/>
			<HamburgerMenu id={styles.hamburgerMenu} />
		</>
	);
};

export default NavbarToggle;
