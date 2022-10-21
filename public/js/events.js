import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getFirestore,
	collection,
	doc,
	getDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

import { firebaseConfig } from "./config.js";

const getEvents = async () => {
	const querySnapshot = await getDocs(collection(db, "events"));
	const events = querySnapshot.docs.map((doc) => doc.data());

	return events;
};

const vueApp = Vue.createApp({
	data() {
		return {
			isLoaded: false,
			pastEvents: [],
			upcomingEvents: [],
		};
	},
	created: async function () {
		const eventsMetaRef = doc(db, "meta", "events");
		const eventsMetaSnapshot = await getDoc(eventsMetaRef);

		const localLastUpdated = parseInt(
			window.localStorage.getItem("lastUpdated")
		);
		const dbLastUpdated = eventsMetaSnapshot.data().lastUpdated.seconds;

		let events = [];
		if (localLastUpdated === dbLastUpdated) {
			console.log("Get events from local storage");

			events = JSON.parse(window.localStorage.getItem("events"));
		} else {
			console.log("Get events from Firebase");

			events = await getEvents();
			window.localStorage.setItem("events", JSON.stringify(events));
			window.localStorage.setItem("lastUpdated", dbLastUpdated.toString());
		}

		this.pastEvents = events.filter((e) => e.finished);
		this.upcomingEvents = events.filter((e) => !e.finished);

		this.isLoaded = true;
	},
});
vueApp.mount("#events-app");
