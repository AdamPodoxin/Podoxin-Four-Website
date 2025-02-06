export type Event = {
	venue: string;
	venue_website: string | null;
	date: string;
	video_link: string | null;
	is_finished: boolean;
};

export const events: Event[] = [
	{
		venue: "Paranoyd Sound Studios",
		venue_website: "https://paranoyd.com/",
		date: "Aug. 2018",
		video_link: "https://www.youtube.com/watch?v=PHn9-E8B9U4",
		is_finished: true,
	},
	{
		venue: "Rocky Point Park",
		venue_website:
			"https://www.portmoody.ca/en/recreation-parks-and-environment/rocky-point-park.aspx",
		date: "14 Jul. 2019",
		video_link: "https://www.youtube.com/watch?v=frrc9gxkRXE",
		is_finished: true,
	},
	{
		venue: "Newport Village",
		venue_website: "https://www.olivethebest.ca/",
		date: "18 Aug. 2019",
		video_link: "https://www.youtube.com/watch?v=ohH3-6RsvJU",
		is_finished: true,
	},
	{
		venue: "PoCo Farmers Market",
		venue_website: "https://www.farmersandmore.org/",
		date: "29 Aug. 2019",
		video_link: "https://www.youtube.com/watch?v=aG0woTJE9S8",
		is_finished: true,
	},
	{
		venue: "Virtual Canada Day Port Moody",
		venue_website:
			"https://calendar.portmoody.ca/default/Detail/2021-07-01-0800-Virtual-Canada-Day",
		date: "1 Jul. 2021",
		video_link: "",
		is_finished: true,
	},
];
