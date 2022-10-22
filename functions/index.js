const {
	initializeApp,
	applicationDefault,
	cert,
} = require("firebase-admin/app");
const {
	getFirestore,
	Timestamp,
	FieldValue,
} = require("firebase-admin/firestore");
const functions = require("firebase-functions");

initializeApp();

const db = getFirestore();
const eventsMetaDocRef = db.collection("meta").doc("events");
const galleryMetaDocRef = db.collection("meta").doc("gallery");

const updateEventsLastUpdated = async () => {
	const dateNow = new Date(Date.now());
	const lastUpdated = Timestamp.fromDate(dateNow);
	console.log(`Events lastUpdated: ${dateNow}`);

	return eventsMetaDocRef.set({
		lastUpdated,
	});
};

const updateGalleryNumImgs = async (change) => {
	const galleryDoc = await galleryMetaDocRef.get();
	let numImgs = 0;

	if (galleryDoc.exists) {
		numImgs = galleryDoc.data().numImgs;
	}

	numImgs += change;
	console.log(`${numImgs} images in gallery`);
	return galleryMetaDocRef.set({
		numImgs,
	});
};

exports.updateEventsLastUpdated = updateEventsLastUpdated;
exports.updateGalleryNumImgs = updateGalleryNumImgs;

exports.onEventCreated = functions.firestore
	.document("events/{eventID}")
	.onCreate(async (snapshot, context) => updateEventsLastUpdated());

exports.onEventUpdated = functions.firestore
	.document("events/{eventID}")
	.onUpdate(async (snapshot, context) => updateEventsLastUpdated());

exports.onFileUploaded = functions.storage
	.object()
	.onFinalize(async (object) => updateGalleryNumImgs(1));

exports.onFileDeleted = functions.storage
	.object()
	.onDelete(async (object) => updateGalleryNumImgs(-1));
