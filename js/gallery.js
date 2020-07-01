var currentImageIndex;

function LoadImages() {
  var src = "../img/gallery";
  $.ajax({
    url: src,
    method: "get",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: (data) => {
      let i = 0;

      Array.from(data).forEach((imgName) => {
        const filePath = `${src}/${imgName}`;
        const imageElement = document.createElement("img");
        $("#gallery").append(imageElement);

        $(imageElement).attr("src", filePath);
        $(imageElement).attr("class", "photo");
        $(imageElement).attr("img-index", i);
      });
    },
    fail: (err) => console.log(err),
  });
}

function OpenModal(image) {
  $("#modal").css("display", "block");
  $("#modalbg").css("display", "block");

  $("#modal").attr("src", image.src);
  currentImageIndex = parseInt($(image).attr("img-index"));

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
  LoadImages();

  if (window.innerWidth >= 1280) {
    $(".photo").click(function (event) {
      OpenModal(event.target);
    });
    $("#modalbg").click(function () {
      CloseModal();
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
