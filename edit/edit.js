let tabs = [];
var eventsTable;

const eventsTrTemplate = "<tr><td><input type='checkbox'></td><td><input type='text'></td><td><input type='text'></td></tr>";

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

window.onload = onload();