var openPath = "img/navbar.png";
var closePath = "img/modal/close.png";

if(!document.title.includes("Home")) {
	openPath = "../img/navbar.png";
	closePath = "../img/modal/close.png";
}

function OpenNavbar() {
	navbar.style.animation = "opennavbar 0.75s 1";
	navbar.style.animationFillMode = "forwards";

	var navbarButton = document.getElementById("navbar-button");
	navbarButton.onclick = function() {CloseNavbar();};
	navbarButton.src = closePath;
}

function CloseNavbar() {
	navbar.style.animation = "closenavbar 0.75s 1";
	navbar.style.animationFillMode = "forwards";

	var navbarButton = document.getElementById("navbar-button");
	navbarButton.onclick = function() {OpenNavbar();};
	navbarButton.src = openPath;
}