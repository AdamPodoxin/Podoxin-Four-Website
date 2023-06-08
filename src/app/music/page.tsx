import MusicGrid from "@/components/Music";
import { Title } from "@/components/Typography";
import { getMusic } from "@/lib/api/music";
import { monthToSeconds } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Music",
};

export const revalidate = monthToSeconds;

const Music = async () => {
	const music = await getMusic();

	return (
		<>
			<Title>Music</Title>
			<MusicGrid music={music} />
		</>
	);
};

export default Music;
