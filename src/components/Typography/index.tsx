import { ReactNode } from "react";
import styles from "./typography.module.css";
import { montserrat, oswald } from "@/lib/fonts";
import Link from "next/link";

export const Title = ({ children }: { children: ReactNode }) => {
	return <h1 className={`${styles.title} ${oswald.className}`}>{children}</h1>;
};

export const About = ({ children }: { children: ReactNode }) => {
	return (
		<p className={`${styles.about} ${montserrat.className}`}>{children}</p>
	);
};

export const Hyperlink = ({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) => {
	return (
		<Link href={href} className={styles.hyperlink}>
			{children}
		</Link>
	);
};

export const Text = ({ children }: { children: ReactNode }) => {
	return <p className={`${styles.text} ${montserrat.className}`}>{children}</p>;
};
