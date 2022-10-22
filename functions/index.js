const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const functions = require("firebase-functions");

initializeApp();

const db = getFirestore();
const eventsDocRef = db.collection("meta").doc("events");

const updateEventsLastUpdated = async () => {
	const dateNow = new Date(Date.now());
	const lastUpdated = Timestamp.fromDate(dateNow);
	console.log(`Events lastUpdated: ${dateNow}`);

	return eventsDocRef.set({
		lastUpdated
	});
};

exports.updateEventsLastUpdated = updateEventsLastUpdated;

exports.onEventCreated = functions.firestore
.document("events/{eventID}")
.onCreate(async (snapshot, context) => updateEventsLastUpdated());

exports.onEventUpdated = functions.firestore
.document("events/{eventID}")
.onUpdate(async (snapshot, context) => updateEventsLastUpdated());
