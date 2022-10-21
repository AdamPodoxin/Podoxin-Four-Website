// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
	getStorage,
	ref,
	listAll,
	getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";
import { firebaseConfig } from "./config.js";

let currentImgIndex = 0;
let images = [];

let shouldOpenModal = false;

function CloseModal() {
	$("#modal").css("display", "none");
	$("#modalbg").css("display", "none");

	$("html").css("overflowY", "scroll");
}

function ChangeImage(count) {
	shouldOpenModal = true;

	var newImgIndex = currentImgIndex + count;

	if (newImgIndex >= images.length) {
		newImgIndex = 0;
	} else if (newImgIndex < 0) {
		newImgIndex = images.length - 1;
	}

	if (newImgIndex >= 0 && newImgIndex < images.length) {
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
});

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const listRef = ref(storage, "test/");

const vueApp = Vue.createApp({
	data() {
		return {
			isLoaded: false,
			images: [],
		};
	},
	methods: {
		OpenModal(index) {
			$("#modal").css("display", "block");
			$("#modalbg").css("display", "block");

			$("#modal").attr("src", images[index]);
			currentImgIndex = index;

			AdjustModalSize();
			AdjustNavigationButtons();

			$("html").css("overflowY", "hidden");
		},
	},
	created: async function () {
		await listAll(listRef).then((res) => {
			res.items.forEach((itemRef) => {
				let imgName = `00${++images.length}`;
				imgName = imgName.substring(imgName.length - 3, imgName.length);
				this.images.push(generateImageURL(imgName));
			});
		});

		images = this.images;

		this.isLoaded = true;
	},
});
vueApp.mount("#gallery");

const generateImageURL = (imgName) => {
	return `https://firebasestorage.googleapis.com/v0/b/podoxin-four-website.appspot.com/o/gallery%2F${imgName}.jpg?alt=media`;
};
