import AddGoogleReview from "@/components/AddGoogleReview";
import MainVideo from "@/components/MainVideo";
import { About, Hyperlink, Title } from "@/components/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home - Podoxin Four",
};

const Home = () => {
	return (
		<>
			<Title>Podoxin Four</Title>
			<MainVideo src="https://www.youtube.com/embed/YWs4NKtPdBs?rel=0" />
			<About>
				<i>Podoxin Four</i> is a family band formed in 2017 in Vancouver by
				bassist Stas Podoxin and his three sons - Adam (drums), Gabriel
				(saxophone), and Leo (keyboard), who were 14, 11, and 9 at the time.
				What started as casual playing at home quickly turned into regular
				rehearsals, live gigs, and studio sessions.
			</About>
			<About>
				The band plays instrumental funk and jazz, blending original
				compositions with covers inspired by artists like Grover Washington Jr.,
				Stevie Wonder, Antonio Carlos Jobim, Lee Ritenour, Shakatak, and
				Mezzoforte.
			</About>

			<About>
				In 2018, the band recorded several tracks professionally. Originals
				include <i>Let's Funk Up</i> (written by Leo and Stas) and{" "}
				<i>In the Smooth Mood</i> (written by Stas). You can find these and more
				on the{" "}
				<Hyperlink href="/music">
					<i>Music</i>
				</Hyperlink>{" "}
				page.
			</About>

			<br />
			<br />
			<br />

			<AddGoogleReview />
		</>
	);
};

export default Home;
