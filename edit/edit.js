let tabs = [];
var eventsTable;

const eventsTrTemplate = "<tr><td><input type='checkbox' name='finished'></td><td><input type='text' name='venue'></td><td><input type='text' name='date'></td></tr>";

function onload() {
    tabs = document.getElementsByClassName("tab");
    eventsTable = document.getElementById("events-table");
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

/*----------------------*/

window.onload = onload();