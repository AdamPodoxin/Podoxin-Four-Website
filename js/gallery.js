var amountOfImages = 68;

function LoadImages() {
	var galleryDiv = document.getElementById("gallery");
	var src = "../img/gallery/";

	for(var i = 0; i < amountOfImages; i++) {
		var imageElement = document.createElement("img");
		galleryDiv.appendChild(imageElement);

		var imgName = "000" + (i + 1);
		imgName = imgName.substring(imgName.length - 3, imgName.length);

		imageElement.src = src + imgName + ".jpg";
		imageElement.className = "photo";
	}
}