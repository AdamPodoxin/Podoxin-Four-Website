import { z } from "zod";
import supabase from "./supabase";

const eventSchema = z.object({
	id: z.number(),
	venue: z.string(),
	venue_website: z.string().nullish(),
	date: z.string(),
	video_link: z.string().nullish(),
	is_finished: z.boolean(),
});

export type EventType = z.infer<typeof eventSchema>;

export const getEvents = async () => {
	const { data: events } = await supabase.from("events").select();
	const validatedEvents = eventSchema.array().parse(events);
	return validatedEvents;
};
