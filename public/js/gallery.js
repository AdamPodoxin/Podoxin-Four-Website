let currentImageIndex = 0;
let amountOfImages = 0;

let socket = io();

socket.on("return gallery images", (data) => {
  LoadImages(data);
});

function LoadImages(images) {
  var src = "../img/gallery/";

  let i = 0;
  Array.from(images).forEach((imageName) => {
    const filePath = src + imageName;
    const imageElement = document.createElement("img");
    $("#gallery").append(imageElement);

    $(imageElement).attr("src", filePath);
    $(imageElement).attr("class", "photo");
    $(imageElement).attr("img-index", i);
    $(imageElement).attr("onclick", `OpenModal('${filePath}', ${i});`);

    i++;
  });

  amountOfImages = i + 1;
}

function OpenModal(imgSrc, imgIndex) {
  $("#modal").css("display", "block");
  $("#modalbg").css("display", "block");

  $("#modal").attr("src", imgSrc);
  currentImageIndex = imgIndex;

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
  var newImageIndex = currentImageIndex + count;

  if (newImageIndex >= amountOfImages) {
    newImageIndex = 0;
  } else if (newImageIndex < 0) {
    newImageIndex = amountOfImages - 1;
  }

  if (newImageIndex >= 0 && newImageIndex < amountOfImages) {
    $("#modal").attr("src", gallery.children[newImageIndex].src);
    console.log($("#modal").attr("src"));
    currentImageIndex = newImageIndex;

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
  socket.emit("get gallery images");

  if (window.innerWidth >= 1280) {
    $("#close").click(() => {
      CloseModal();
    });
    $("#prev").click(() => {
      ChangeImage(-1);
    });
    $("#next").click(() => {
      ChangeImage(1);
    });
  }
});
