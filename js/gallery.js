var amountOfImages = 68;
var currentImageIndex;

function LoadImages() {
	var galleryDiv = document.getElementById("gallery");
	var src = "../img/gallery/";

	for(var i = 0; i < amountOfImages; i++) {
		var imageElement = document.createElement("img");
		gallery.appendChild(imageElement);

		var imgName = "000" + (i + 1);
		imgName = imgName.substring(imgName.length - 3, imgName.length);

		imageElement.src = src + imgName + ".jpg";
		imageElement.className = "photo";

		if(window.innerWidth > 1280) {
			imageElement.onclick = function() { OpenModal(this); };
		}
	}
}

function OpenModal(image) {
	modal.style.display = "block";
	modalbg.style.display = "block";

	modal.src = image.src;
	currentImageIndex = parseInt(image.src.replace(/^.*[\\\/]/, '').replace('.jpg', '')) - 1;

	AdjustModalSize();
	AdjustNavigationButtons();

	document.documentElement.style.overflowY = "hidden";
}

function CloseModal() {
	modal.style.display = "none";
	modalbg.style.display = "none";

	document.documentElement.style.overflowY = "scroll";
}

function ChangeImage(count) {
	var newImageIndex = currentImageIndex + count;

	if(newImageIndex >= amountOfImages) {
		newImageIndex = 0;
	} else if(newImageIndex < 0) {
		newImageIndex = amountOfImages - 1;
	}
	console.log(newImageIndex);

	if(newImageIndex >= 0 && newImageIndex < amountOfImages) {
		modal.src = gallery.children[newImageIndex].src;
		currentImageIndex = newImageIndex;

		AdjustModalSize();
		AdjustNavigationButtons();
	}
}

function AdjustModalSize() {
	if(modal.clientWidth > window.innerWidth * 0.8) {
		modal.style.width = "80%";
		modal.style.height = "auto";
	} 

	if(modal.clientHeight > window.innerHeight * 0.8) {
		modal.style.height = "80%";
		modal.style.width = "auto";
	}
}

function AdjustNavigationButtons() {
	var distance = (window.innerWidth - modal.clientWidth) / 2 - 50;
	prev.style.left = distance + "px";
	next.style.right = distance + "px";
}