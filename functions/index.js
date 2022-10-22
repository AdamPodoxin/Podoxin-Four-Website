const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const functions = require("firebase-functions");

initializeApp();

const db = getFirestore();

exports.updateEventsLastUpdated = functions.firestore
.document("events/")
.onCreate(async (snapshot, context) => {
	const docRef = db.collection("meta").doc("events");
	const lastUpdated = Date.now();
	await docRef.set({
		lastUpdated
	});

	console.log(`Events lastUpdated: ${lastUpdated}`);
});
