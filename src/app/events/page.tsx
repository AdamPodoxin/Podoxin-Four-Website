import { EventTable } from "@/components/Events";
import { Text, Title } from "@/components/Typography";
import { getEvents } from "@/lib/api/events";
import { dayToSeconds } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Events",
};

export const revalidate = dayToSeconds;

const Events = async () => {
	const events = await getEvents();
	const pastEvents = events.filter((event) => event.is_finished);
	const upcomingEvents = events.filter((event) => !event.is_finished);

	return (
		<>
			<Title>Upcoming Events</Title>
			{upcomingEvents.length > 0 ? (
				<EventTable events={upcomingEvents} />
			) : (
				<Text>Nothing to see here... yet</Text>
			)}

			<br />

			<Title>Past Events</Title>
			<EventTable events={pastEvents} />
		</>
	);
};

export default Events;
