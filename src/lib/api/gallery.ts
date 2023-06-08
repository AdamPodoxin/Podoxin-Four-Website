import supabase from "./supabase";

export const getImages = async () => {
	const { data: images } = await supabase.storage.from("gallery").list();
	return images!.map(
		(image) =>
			supabase.storage.from("gallery").getPublicUrl(image.name).data.publicUrl
	);
};
