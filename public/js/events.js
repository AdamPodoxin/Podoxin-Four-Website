import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getFirestore,
	collection,
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
		const events = await getEvents();
		this.pastEvents = events.filter((e) => e.finished);
		this.upcomingEvents = events.filter((e) => !e.finished);

		this.isLoaded = true;
	},
});
vueApp.mount("#events-app");
