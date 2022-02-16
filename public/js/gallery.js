let numImgs = 0;
var currentImageIndex;

// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getStorage,
	ref,
	getDownloadURL,
	listAll,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";
import { firebaseConfig } from "./config.js";

function LoadImages() {
	var src = "../img/gallery";

	for (let i = 1; i <= numImgs; i++) {
		let imgName = `00${i}`;
		imgName = imgName.substring(imgName.length - 3, imgName.length);

		const filePath = `${src}/${imgName}.jpg`;
		const imageElement = document.createElement("img");
		$("#gallery").append(imageElement);

		$(imageElement).attr("src", filePath);
		$(imageElement).attr("class", "photo");
		$(imageElement).attr("img-index", i);

		if (window.innerWidth >= 1280)
			$(imageElement).click(() => {
				OpenModal(imageElement);
			});
	}

	$("#loading-indicator").css("display", "none");
}

const loadImage = (url) => {
	const imageElement = document.createElement("img");
	$("#gallery").append(imageElement);

	$(imageElement).attr("src", url);
	$(imageElement).attr("class", "photo");
	//$(imageElement).attr("img-index", i);

	if (window.innerWidth >= 1280)
		$(imageElement).click(() => {
			OpenModal(imageElement);
		});
};

function OpenModal(image) {
	$("#modal").css("display", "block");
	$("#modalbg").css("display", "block");

	$("#modal").attr("src", image.src);
	currentImageIndex = parseInt($(image).attr("img-index"));

	AdjustModalSize();
	AdjustNavigationButtons();

	$("html").css("overflowY", "hidden");
}

function CloseModal() {
	$("#modal").css("display", "none");
	$("#modalbg").css("display", "none");

	$("html").css("overflowY", "scroll");
}

function ChangeImage(count) {
	var newImageIndex = currentImageIndex + count;

	if (newImageIndex >= amountOfImages) {
		newImageIndex = 0;
	} else if (newImageIndex < 0) {
		newImageIndex = amountOfImages - 1;
	}

	if (newImageIndex >= 0 && newImageIndex < amountOfImages) {
		$("#modal").attr("src", gallery.children[newImageIndex].src);
		currentImageIndex = newImageIndex;

		AdjustModalSize();
		AdjustNavigationButtons();
	}
}

function AdjustModalSize() {
	if ($("#modal").attr("clientWidth") > window.innerWidth * 0.8) {
		$("#modal").css("width", "80%");
		$("#modal").css("height", "auto");
	}

	if ($("#modal").attr("clientHeight") > window.innerHeight * 0.8) {
		$("#modal").css("height", "80%");
		$("#modal").css("width", "auto");
	}
}

function AdjustNavigationButtons() {
	var distance = (window.innerWidth - modal.clientWidth) / 2 - 50;
	$("#prev").css("left", distance + "px");
	$("#next").css("right", distance + "px");
}

$(document).ready(function () {
	if (window.innerWidth >= 1280) {
		$(".photo").click();
		$("#modalbg").click(function () {
			CloseModal();
		});
		$("#close").click(function () {
			CloseModal();
		});
		$("#prev").click(function () {
			ChangeImage(-1);
		});
		$("#next").click(function () {
			ChangeImage(1);
		});
	}

	const app = initializeApp(firebaseConfig);
	const storage = getStorage(app);
	const listRef = ref(storage, "gallery/");

	listAll(listRef).then((res) => {
		res.items.forEach((itemRef) => {
			getDownloadURL(itemRef).then((url) => loadImage(url));
		});

		$("#loading-indicator").css("display", "none");
	});
});
