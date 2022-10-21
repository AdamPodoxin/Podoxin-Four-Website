// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getFirestore,
	collection,
	doc,
	getDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { firebaseConfig } from "./config.js";

const getEvents = async () => {
	const querySnapshot = await getDocs(collection(db, "events"));
	const events = querySnapshot.docs.map((doc) => doc.data());

	return events;
};
window.getEvents = getEvents;
