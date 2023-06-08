import MainVideo from "@/components/MainVideo";
import { About, Title } from "@/components/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Movie",
};

const Movie = () => {
	return (
		<>
			<Title>Movie</Title>
			<MainVideo src="https://www.youtube.com/embed/s4RTRFg2R-Y?rel=0" />
			<About>
				This 16-minute movie summarizes our 2018 project that was shot and
				recorded in one take at Paranoyd Sound Studios, Port Moody, BC. Many
				thanks to Paranoyd for great sound recording quality, and to Taurus
				Video Production for shooting and editing the material.
			</About>
		</>
	);
};

export default Movie;
