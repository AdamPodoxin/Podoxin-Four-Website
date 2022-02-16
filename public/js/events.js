var windowWidth = window.innerWidth;

// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getFirestore,
	collection,
	doc,
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

	const eventsArr = [];
	const querySnapshot = await getDocs(collection(db, "events"));
	querySnapshot.forEach((doc) => {
		eventsArr.push(doc.data());
	});

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
		const modalId = '"' + eventData.ytId + '"';
		ytHTML =
			"<td><img src='../img/yt_icon_rgb.png' width='46px' height='32px' onclick='OpenModal(" +
			modalId +
			")' title='Click to view video'></td>";
	}

	const final = "<tr>" + dateHTML + venueHTML + ytHTML + "</tr>";

	return final;
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

function CloseModal() {
	$("#modal").attr("src", "");

	$("#modal").css("display", "none");
	$("#modalbg").css("display", "none");
}
