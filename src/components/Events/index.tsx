import { ReactNode } from "react";
import Image from "next/image";
import youtubeIcon from "public/assets/img/youtube.png";
import { montserrat, oswald } from "@/lib/fonts";
import { Event } from "@/lib/events";
import styles from "./events.module.css";

const Header = ({ children }: { children: ReactNode }) => {
	return <th className={`${styles.header} ${oswald.className}`}>{children}</th>;
};

const Cell = ({ children }: { children: ReactNode }) => {
	return (
		<td className={`${styles.cell} ${montserrat.className}`}>{children}</td>
	);
};

const Row = ({ event }: { event: Event }) => {
	return (
		<tr className={styles.row}>
			<Cell>{event.date}</Cell>
			<Cell>
				{event.venue_website ? (
					<a href={event.venue_website} target="_blank">
						{event.venue}
					</a>
				) : (
					<p>{event.venue}</p>
				)}
			</Cell>
			<Cell>
				{event.video_link && (
					<a href={event.video_link} target="_blank">
						<Image
							src={youtubeIcon}
							alt="YouTube icon"
							width={46}
							height={32}
						/>
					</a>
				)}
			</Cell>
		</tr>
	);
};

export const EventTable = ({ events }: { events: Event[] }) => {
	const rows = events.map((event, i) => <Row event={event} key={i} />);
	return (
		<table className={styles.eventsTable}>
			<thead>
				<tr>
					<Header>Date</Header>
					<Header>Venue</Header>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};
