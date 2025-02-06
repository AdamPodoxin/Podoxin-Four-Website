import { Metadata } from "next";
import MusicGrid from "@/components/Music";
import { Title } from "@/components/Typography";
import { music } from "@/lib/music";

export const metadata: Metadata = {
	title: "Music",
};

const Music = async () => {
	return (
		<>
			<Title>Music</Title>
			<MusicGrid music={music} />
		</>
	);
};

export default Music;
