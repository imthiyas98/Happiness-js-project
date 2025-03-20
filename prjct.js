const material = document.getElementById("Materials");
const rate = document.getElementById("rate");
const item = document.getElementById("item");
const quality = document.getElementById("quality")
const addButton = document.getElementById("submit-button");

const sandorder = document.getElementById("sandOrder");
const metalsorder = document.getElementById("MetalsOrder");
const othermaterialsorder = document.getElementById("OtherMaterialsOrder");

// Load stored data when the page loads
document.addEventListener("DOMContentLoaded", loadStoredData);

addButton.addEventListener("click", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const materialValue = material.value.trim();
    const rateValue = rate.value.trim();
    const qualityvalue=quality.value.trim();
    const itemType = item.value;

    if (materialValue === "" || rateValue === "") {
        alert("Please enter both material name and rate.");
        return;
    }
    

    // Determine the target table
    let targetTable;
    let storageKey;
    if (itemType == "1") {
        targetTable = sandorder;
        storageKey = "sandOrders";
    } else if (itemType == "2") {
        targetTable = metalsorder;
        storageKey = "metalOrders";
    } else {
        targetTable = othermaterialsorder;
        storageKey = "otherMaterialsOrders";
    }

    // Get stored data
    let storedData = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Get the new row number
    let rowCount = storedData.length + 1;

    // Create a new entry object
    const newEntry = {
        no: rowCount,
        name: materialValue,
        rate: rateValue,
        quality:qualityvalue
    };

    // Add new entry to stored data
    storedData.push(newEntry);
    localStorage.setItem(storageKey, JSON.stringify(storedData));

    // Add entry to the table
    addRowToTable(targetTable, newEntry);

    // Clear input fields
    material.value = "";
    rate.value = "";
    quality.value=""
    item.value=""

}

// Function to add a row to the given table
function addRowToTable(targetTable, entry) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${entry.no}</td>
        <td>${entry.name}</td>
        <td>${entry.rate}</td>
        <td>${entry.quality}</td>
    `;
    targetTable.appendChild(tr);
}

// Function to load stored data when the page loads
function loadStoredData() {
    loadTableData("sandOrders", sandorder);
    loadTableData("metalOrders", metalsorder);
    loadTableData("otherMaterialsOrders", othermaterialsorder);
}

// Function to load table data from localStorage
function loadTableData(storageKey, targetTable) {
    let storedData = JSON.parse(localStorage.getItem(storageKey)) || [];
    storedData.forEach(entry => {
        addRowToTable(targetTable, entry);
    });
}
