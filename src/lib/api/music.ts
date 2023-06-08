import { z } from "zod";
import supabase from "./supabase";

const musicSchema = z.object({
	id: z.number(),
	embed_link: z.string(),
});

export type MusicType = z.infer<typeof musicSchema>;

export const getMusic = async () => {
	const { data: music } = await supabase.from("music").select();
	const validatedMusic = musicSchema.array().parse(music);
	return validatedMusic;
};
