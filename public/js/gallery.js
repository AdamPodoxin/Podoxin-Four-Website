// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getStorage,
	ref,
	listAll,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";
import { firebaseConfig } from "./config.js";

let currentImgIndex = 0;
let numImgs = 0;

let shouldOpenModal = false;

const createImage = (url, i) => {
	const imageElement = document.createElement("img");
	$("#gallery").append(imageElement);

	$(imageElement).attr("src", url);
	$(imageElement).attr("class", "photo");
	$(imageElement).attr("img-index", i);

	if (window.innerWidth >= 1280)
		$(imageElement).click(() => {
			OpenModal(imageElement);
		});
};

function OpenModal(image) {
	$("#modal").css("display", "block");
	$("#modalbg").css("display", "block");

	$("#modal").attr("src", image.src);
	currentImgIndex = parseInt($(image).attr("img-index")) - 1;

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
	shouldOpenModal = true;

	var newImgIndex = currentImgIndex + count;

	if (newImgIndex >= numImgs) {
		newImgIndex = 0;
	} else if (newImgIndex < 0) {
		newImgIndex = numImgs - 1;
	}

	if (newImgIndex >= 0 && newImgIndex < numImgs) {
		$("#modal").attr("src", gallery.children[newImgIndex].src);
		currentImgIndex = newImgIndex;

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
			if (shouldOpenModal) {
				shouldOpenModal = false;
			} else {
				CloseModal();
			}
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
		numImgs = res.items.length;

		for (let i = 1; i <= numImgs; i++) {
			let imgName = `00${i}`;
			imgName = imgName.substring(imgName.length - 3, imgName.length);

			createImage(generateImageURL(imgName), i);
		}

		$("#loading-indicator").css("display", "none");
	});
});

const generateImageURL = (imgName) => {
	return `https://firebasestorage.googleapis.com/v0/b/podoxin-four-website.appspot.com/o/gallery%2F${imgName}.jpg?alt=media`;
};
