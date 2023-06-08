"use client";

import styles from "./navBar.module.css";
import navRoutes from "@/lib/routes";
import NavbarToggle from "./NavbarToggle";
import { NavbarProvider } from "./NavbarContext";
import NavLink from "./NavLink";

const Navbar = () => {
	return (
		<NavbarProvider>
			<div id={styles.navbarWrapper}>
				<NavbarToggle />

				<nav id={styles.navbar}>
					{navRoutes.map((route) => (
						<NavLink route={route} key={route.href} />
					))}
				</nav>
			</div>
		</NavbarProvider>
	);
};

export default Navbar;
