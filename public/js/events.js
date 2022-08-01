var windowWidth = window.innerWidth;

// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getFirestore,
	collection,
	doc,
	getDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

import { firebaseConfig } from "./config.js";

$(document).ready(async function () {
	var iframeWidth = windowWidth * 0.8;
	var iframeHeight = (iframeWidth * 9) / 16;

	$("#modal").attr("width", iframeWidth + "px");
	$("#modal").attr("height", iframeHeight + "px");

	$("#close").click(function () {
		CloseModal();
	});

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	let eventsArr = [];
	const querySnapshot = await getDocs(collection(db, "events"));

	const eventsMetaRef = doc(db, "meta", "events");
	const eventsMetaSnapshot = await getDoc(eventsMetaRef);

	const localLastUpdated = parseInt(window.localStorage.getItem("lastUpdated"));
	const dbLastUpdated = eventsMetaSnapshot.data().lastUpdated.seconds;

	// Load events from database
	if (!localLastUpdated || localLastUpdated != dbLastUpdated) {
		console.log("Getting events from server");

		querySnapshot.forEach((doc) => {
			eventsArr.push(doc.data());
		});

		window.localStorage.setItem("events", JSON.stringify(eventsArr));
		window.localStorage.setItem("lastUpdated", dbLastUpdated.toString());
	}
	// Load events from local storage
	else {
		console.log("Getting events from local storage");
		eventsArr = JSON.parse(window.localStorage.getItem("events"));
	}

	loadEventsFromJSON(eventsArr);
});

function loadEventsFromJSON(eventsArr) {
	eventsArr.forEach((eventData) => {
		if (eventData.finished) {
			$("#past-events-body").append(createEventFromJSON(eventData));
		} else {
			$("#no-events").css("display", "none");
			$("#upcoming-events-body").append(createEventFromJSON(eventData));
		}
	});

	$("#loading-indicator").css("display", "none");
}

function OpenModal(src) {
	if (windowWidth >= 1280) {
		$("#modal").attr(
			"src",
			"https://www.youtube.com/embed/" +
				src +
				"?rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
		);

		$("#modal").css("display", "block");
		$("#modalbg").css("display", "block");
	} else {
		window.location = "https://youtube.com/watch?v=" + src;
	}
}

function createEventFromJSON(eventData) {
	const dateHTML = "<td>" + eventData.date + "</td>";

	let venueComponents = eventData.venue.split(",");
	let venueHTML =
		"<td><a href='" +
		eventData.venueSite +
		"' target='_blank' class='hyperlink'>" +
		venueComponents[0] +
		"</td >";

	venueComponents.forEach((component, index) => {
		if (index > 0) {
			venueHTML += "," + component;
		}
	});

	var ytHTML = "";

	if (eventData.ytId != "") {
		ytHTML = `<td><a href='https://youtube.com/watch?v=${eventData.ytId}' target='_blank'><img src='img/yt_icon_rgb.png' width='46px' height='32px' title='Click to view video'></a></td>`;
	}

	const final = "<tr>" + dateHTML + venueHTML + ytHTML + "</tr>";

	return final;
}

function CloseModal() {
	$("#modal").attr("src", "");

	$("#modal").css("display", "none");
	$("#modalbg").css("display", "none");
}
