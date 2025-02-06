import { Metadata } from "next";
import { EventTable } from "@/components/Events";
import { Text, Title } from "@/components/Typography";
import { events } from "@/lib/events";

export const metadata: Metadata = {
	title: "Events",
};

const Events = async () => {
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
