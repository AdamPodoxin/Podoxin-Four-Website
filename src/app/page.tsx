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
				<i>Podoxin Four</i> is a musical band that plays smooth funk-jazz
				compositions. The band was formed in 2017 in Vancouver, BC, Canada by
				Stas Podoxin. The uniqueness of the band is that the players are
				all members of the Podoxin family. As of the time of this website&apos;s
				launch, Adam (15) is playing drums, Gabriel (12) on the saxophone, and
				Leo (10) on the keyboard. Their father, Stas, is the bass player and the
				band&apos;s leader.
			</About>
			<About>
				The band&apos;s style is influenced by artists such as Grover
				Washington, Stevie Wonder, Antonio Carlos Jobim, Lee Ritenour, George
				Benson, Al Jarreau, Shakatak, Mezzoforte, and many others. So far, the
				band is mainly playing covers, but also has its own original
				compositions, such as <i>Let&apos;s Funk Up</i> written by Leo and Stas
				and <i>In the Smooth Mood</i> written by Stas. In 2018, the band has
				recorded some of its pieces at a professional sound recording studio.
				The result is presented on this website on the{" "}
				<Hyperlink href="/music">
					<i>Music</i>
				</Hyperlink>{" "}
				page. We hope you enjoy the music. If you would like the band to perform
				at your event, don&apos;t hesitate to contact us at the{" "}
				<Hyperlink href="/contact">
					<i>Contact</i>
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
