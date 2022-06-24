let tabs = document.getElementsByClassName("tab-item");

for(const tab of tabs) {
    tab.addEventListener("click", showTabContent);
}

function showTabContent(e) {
    for(const tab of tabs) {
        tab.className = "tab-item";
    }
    this.classList.add("tab-border");

    let clicked = document.getElementById(`${this.id}-content`);
    let allItems = document.getElementsByClassName("tab-content-item");
    for(const item of allItems) {
        item.className = "tab-content-item";
    }
    clicked.classList.add("show")
}