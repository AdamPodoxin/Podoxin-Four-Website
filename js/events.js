var windowWidth = window.innerWidth;

$(document).ready(function() {
    var iframeWidth = windowWidth * 0.8;
    var iframeHeight = iframeWidth * 9 / 16;

    $("#modal").attr("width", iframeWidth + "px");
    $("#modal").attr("height", iframeHeight + "px");

    $("#close").click(function() {
        CloseModal();
    });
});

function OpenModal(src) {
    if(windowWidth >= 1280) {
        $("#modal").attr("src", "https://www.youtube.com/embed/" + src + "?rel=0&enablejsapi=1&version=3&playerapiid=ytplayer");

        $("#modal").css("display", "block");
        $("#modalbg").css("display", "block");
    } else {
        window.location = ("https://youtube.com/watch?v=" + src);
    }
}

function CloseModal() {
    $("#modal").attr("src", "");

    $("#modal").css("display", "none");
	$("#modalbg").css("display", "none");
}