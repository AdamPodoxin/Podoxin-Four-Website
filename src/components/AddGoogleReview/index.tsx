import Link from "next/link";
import styles from "./addGoogleReview.module.css";
import { open_sans } from "@/lib/fonts";

const AddGoogleReview = () => {
	return (
		<>
			<span className={`${styles.googleReviewButton} ${open_sans.className}`}>
				<Link href="/addgooglereview">Review us on Google</Link>
			</span>
		</>
	);
};

export default AddGoogleReview;
