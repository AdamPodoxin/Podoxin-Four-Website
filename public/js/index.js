var openPath = "assets/img/navbar.png";
var closePath = "assets/img/modal/close.png";

var isNavbarOpen = false;

if (!document.title.includes("Home")) {
	openPath = "assets/img/navbar.png";
	closePath = "assets/img/modal/close.png";
}

function OpenNavbar() {
	$("#navbar").css("animation", "opennavbar 0.75s 1");
	$("#navbar").css("animationFillMode", "forwards");
	$("#navbar-button").attr("src", closePath);

	isNavbarOpen = true;
}

function CloseNavbar() {
	$("#navbar").css("animation", "closenavbar 0.75s 1");
	$("#navbar").css("animationFillMode", "forwards");
	$("#navbar-button").attr("src", openPath);

	isNavbarOpen = false;
}

$(document).ready(function () {
	$("#navbar-button").click(function () {
		if (isNavbarOpen) {
			CloseNavbar();
		} else {
			OpenNavbar();
		}
	});
});
