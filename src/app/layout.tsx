import { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: {
		default: "Podoxin Four",
		template: "%s - Podoxin Four",
	},
	description:
		"Podoxin Four is a family band that plays smooth funk-jazz compositions.",
	icons: "/assets/img/favicon.png",
	metadataBase: new URL("https://podoxinfour.com"),
	openGraph: {
		title: "Podoxin Four",
		type: "website",
		description:
			"Podoxin Four is a family band that plays smooth funk-jazz compositions.",
		url: "https://podoxinfour.com",
		images: [
			{
				url: "/assets/img/favicon.png",
				type: "image/png",
				width: 512,
				height: 512,
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
