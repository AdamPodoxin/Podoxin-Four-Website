var windowWidth = window.innerWidth;

$(document).ready(function () {
  var iframeWidth = windowWidth * 0.8;
  var iframeHeight = (iframeWidth * 9) / 16;

  $("#modal").attr("width", iframeWidth + "px");
  $("#modal").attr("height", iframeHeight + "px");

  $("#close").click(function () {
    CloseModal();
  });

  $.ajax({
    headers: {
      "x-requested-with": "xhr",
    },
    url:
      "https://cors-anywhere.herokuapp.com/https://podoxin-four-website.herokuapp.com/api/events",
    method: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "jsonp",
    success: (res) => loadEventsFromJSON(res.data),
    error: (err) => console.error(err),
  });
});

function loadEventsFromJSON(jsonData) {
  const dataArray = Array.from(jsonData);

  dataArray.forEach((element) => {
    if (element.finished) {
      $("#past-events-body").append(createEventFromJSON(element));
    } else {
      $("#no-events").css("display", "none");
      $("#upcoming-events-body").append(createEventFromJSON(element));
    }
  });
}

function createEventFromJSON(element) {
  const dateHTML = "<td>" + element.date + "</td>";

  let venueComponents = element.venue.split(",");
  let venueHTML =
    "<td><a href='" +
    element.venueSite +
    "' target='_blank' class='hyperlink'>" +
    venueComponents[0] +
    "</td >";

  venueComponents.forEach((component, index) => {
    if (index > 0) {
      venueHTML += "," + component;
    }
  });

  var ytHTML = "";

  if (element.ytId != "") {
    const modalId = '"' + element.ytId + '"';
    ytHTML =
      "<td><img src='../img/yt_icon_rgb.png' width='46px' height='32px' onclick='OpenModal(" +
      modalId +
      ")' title='Click to view video'></td>";
  }

  const final = "<tr>" + dateHTML + venueHTML + ytHTML + "</tr>";

  return final;
}

function OpenModal(src) {
  if (windowWidth >= 1280) {
    $("#modal").attr(
      "src",
      "https://www.youtube.com/embed/" +
        src +
        "?rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
    );

    $("#modal").css("display", "block");
    $("#modalbg").css("display", "block");
  } else {
    window.location = "https://youtube.com/watch?v=" + src;
  }
}

function CloseModal() {
  $("#modal").attr("src", "");

  $("#modal").css("display", "none");
  $("#modalbg").css("display", "none");
}
