var amountOfImages = 68;

function LoadImages() {
	var galleryDiv = document.getElementById("gallery");
	var src = "../img/gallery/";

	for(var i = 0; i < amountOfImages; i++) {
		var imageElement = document.createElement("img");
		gallery.appendChild(imageElement);

		var imgName = "000" + (i + 1);
		imgName = imgName.substring(imgName.length - 3, imgName.length);

		imageElement.onclick = function() { OpenModal(this); };
		imageElement.src = src + imgName + ".jpg";
		imageElement.className = "photo";
	}
}

function OpenModal(image) {
	modal.style.display = "block";
	modalbg.style.display = "block";

	modal.src = image.src;

	document.documentElement.style.overflowY = "hidden";
}

function CloseModal() {
	modal.style.display = "none";
	modalbg.style.display = "none";

	document.documentElement.style.overflowY = "scroll"; }