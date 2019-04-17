let amountOfImages = 68;

function LoadImages() {
	const galleryDiv = document.getElementById("gallery");
	const src = "../img/gallery/";

	for(let i = 0; i < amountOfImages; i++) {
		let imageElement = document.createElement("img");
		galleryDiv.appendChild(imageElement);

		let imgName = "000" + (i + 1);
		imgName = imgName.substring(imgName.length - 3, imgName.length);

		imageElement.src = src + imgName + ".jpg";
		imageElement.className = "photo";
	}
}