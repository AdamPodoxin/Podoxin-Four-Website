let tabs = [];

var eventsTable;
var generatedJSON;

const eventsTrTemplate = "<tr><td><input type='checkbox' name='finished'></td><td><input type='text' name='venue'></td><td><input type='text' name='date'></td></tr>";

function onload() {
    tabs = document.getElementsByClassName("tab");
    eventsTable = document.getElementById("events-table");
    generatedJSON = document.getElementById("generated-json");
}

function openTab(tabId) {
    Array.from(tabs).forEach(tab => {
        if (tab.id == tabId) {
            tab.style.display = "block";
        } else {
            tab.style.display = "none";
        }
    });
}

/*--------Events--------*/

class EventsTableRow {
    constructor(finished, venue, date) {
        this.finished = finished;
        this.venue = venue;
        this.date = date;
    }
}

function addEventsTr(finished, venue, date) {
    const firstChild = eventsTable.childNodes[0];
    const elementToAdd = $(eventsTrTemplate)[0];

    eventsTable.insertBefore(elementToAdd, firstChild);

    const finishedInput = elementToAdd.childNodes[0].childNodes[0];
    const venueInput = elementToAdd.childNodes[1].childNodes[0];
    const dateInput = elementToAdd.childNodes[2].childNodes[0];

    finishedInput.checked = finished;
    venueInput.value = venue;
    dateInput.value = date;
}

function generateEventsJSON() {
    const tableRows = Array.from(eventsTable.querySelectorAll("tr"));
    tableRows.pop();

    let tableRowObjects = new Array();
    tableRows.forEach(tableRow => {
        const finished = tableRow.childNodes[0].childNodes[0].checked;
        const venue = tableRow.childNodes[1].childNodes[0].value;
        const date = tableRow.childNodes[2].childNodes[0].value;

        const tableRowObject = new EventsTableRow(finished, venue, date);
        tableRowObjects.push(tableRowObject);
    });

    const generatedJSONString = JSON.stringify(tableRowObjects);

    generatedJSON.innerHTML = generatedJSONString;
    generatedJSON.select();
    generatedJSON.setSelectionRange(0, 99999);

    document.execCommand("copy");
}

/*----------------------*/

window.onload = onload();