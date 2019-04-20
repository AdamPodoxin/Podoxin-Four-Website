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
	currentImageIndex = parseInt(image.src.replace(/^.*[\\\/]/, '').replace('.jpg', ''));

	document.documentElement.style.overflowY = "hidden";
}

function CloseModal() {
	modal.style.display = "none";
	modalbg.style.display = "none";

	document.documentElement.style.overflowY = "scroll";
}

function ChangeImage(count) {
	var newImageIndex = currentImageIndex - 1 + count;

	if(newImageIndex >= 0 && newImageIndex < amountOfImages) {
		modal.src = gallery.children[newImageIndex].src;
		currentImageIndex += count;
	}
}