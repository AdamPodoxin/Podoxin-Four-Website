// $(document).ready(async function () {
// 	let events = [];
// 	events = await getEvents();

// 	// Load events from database
// 	// if (!localLastUpdated || localLastUpdated != dbLastUpdated) {
// 	// 	console.log("Getting events from Firebase");
// 	// 	events = await getEvents();

// 	// 	window.localStorage.setItem("events", JSON.stringify(events));
// 	// 	window.localStorage.setItem("lastUpdated", dbLastUpdated.toString());
// 	// }
// 	// // Load events from local storage
// 	// else {
// 	// 	console.log("Getting events from local storage");
// 	// 	events = JSON.parse(window.localStorage.getItem("events"));
// 	// }

// 	//loadEventsFromJSON(events);
// });

const app = Vue.createApp({
	data() {
		return {
			pastEvents: [],
			upcomingEvents: [],
		};
	},
	created: async function () {
		const events = await getEvents();
		console.log(events);
		this.pastEvents = events.filter((e) => e.finished);
		this.upcomingEvents = events.filter((e) => !e.finished);
	},
});
app.mount("#events-app");

// (async () => {
// 	const events = await getEvents();
// 	console.log(events);
// })();
