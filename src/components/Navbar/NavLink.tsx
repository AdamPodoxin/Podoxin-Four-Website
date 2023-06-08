import { oswald } from "@/lib/fonts";
import { NavRouteType } from "@/lib/routes";
import { enableScroll } from "@/lib/util/scrollUtil";
import Link from "next/link";
import { useNavbar } from "./NavbarContext";
import styles from "./navBar.module.css";

const NavLink = ({ route }: { route: NavRouteType }) => {
	const { setOpen, currentRoute } = useNavbar();
	return (
		<Link
			href={route.href}
			className={`${styles.navItem} ${oswald.className}`}
			id={currentRoute === route.href ? styles.active : undefined}
			onClick={() => {
				setOpen(false);
				enableScroll(true);
			}}
		>
			{route.title}
		</Link>
	);
};

export default NavLink;
