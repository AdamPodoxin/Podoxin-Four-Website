let tabs = [];

var eventsTable;
var jsonInput;

const eventsTrTemplate =
  "<tr><td><input type='checkbox' name='finished'></td><td><input type='text' name='date'></td><td><input type='text' name='venue'></td><td><input type='text' name='venue-site'></td><td><input type='text' name='yt-id'></td></tr>";

let socket = io();

function onload() {
  tabs = document.getElementsByClassName("tab");
  eventsTable = document.getElementById("events-table");
  jsonInput = document.getElementById("json");

  loadEventsFromJSON();
}

function openTab(tabId) {
  Array.from(tabs).forEach((tab) => {
    if (tab.id == tabId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

/*--------Events--------*/

class EventsTableRow {
  constructor(finished, date, venue, venueSite, ytId) {
    this.finished = finished;
    this.venue = venue;
    this.venueSite = venueSite;
    this.date = date;
    this.ytId = ytId;
  }
}

function addEventsTr(finished, date, venue, venueSite, ytId) {
  const firstChild = eventsTable.childNodes[0];
  const elementToAdd = $(eventsTrTemplate)[0];

  eventsTable.insertBefore(elementToAdd, firstChild);

  const finishedInput = elementToAdd.childNodes[0].childNodes[0];
  const dateInput = elementToAdd.childNodes[1].childNodes[0];
  const venueInput = elementToAdd.childNodes[2].childNodes[0];
  const venueSiteInput = elementToAdd.childNodes[3].childNodes[0];
  const ytIdInput = elementToAdd.childNodes[4].childNodes[0];

  finishedInput.checked = finished;
  dateInput.value = date;
  venueInput.value = venue;
  venueSiteInput.value = venueSite;
  ytIdInput.value = ytId;
}

function generateEventsJSON() {
  const tableRows = Array.from(eventsTable.querySelectorAll("tr"));
  tableRows.pop();

  let tableRowObjects = new Array();
  tableRows.forEach((tableRow) => {
    const finished = tableRow.childNodes[0].childNodes[0].checked;
    const date = tableRow.childNodes[1].childNodes[0].value;
    const venue = tableRow.childNodes[2].childNodes[0].value;
    const venueSite = tableRow.childNodes[3].childNodes[0].value;
    const ytId = tableRow.childNodes[4].childNodes[0].value;

    const tableRowObject = new EventsTableRow(
      finished,
      date,
      venue,
      venueSite,
      ytId
    );
    tableRowObjects.push(tableRowObject);
  });

  const generatedJSON = JSON.stringify(tableRowObjects, null, "\t");
  socket.emit("upload events json", generatedJSON);
}

function loadEventsFromJSON() {
  $.ajax({
    url: "../json/events.json",
    dataType: "text",
    success: function (data) {
      const dataArray = Array.from(JSON.parse(data));

      dataArray.reverse().forEach((eventTableRow) => {
        addEventsTr(
          eventTableRow.finished,
          eventTableRow.date,
          eventTableRow.venue,
          eventTableRow.venueSite,
          eventTableRow.ytId
        );
      });
    },
  });
}

/*----------------------*/

window.onload = onload();
