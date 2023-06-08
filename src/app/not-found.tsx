import { montserrat } from "@/lib/fonts";
import styles from "./not-found.module.css";

const NotFound = () => {
	return (
		<p id={styles.notFound} className={montserrat.className}>
			It seems the page you are looking for does not exist. Click{" "}
			<a href="/">here</a> to go back to the home page.
		</p>
	);
};

export default NotFound;
