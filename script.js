document.addEventListener("DOMContentLoaded", function () {
  // Array of options for the category dropdown
  const tribes = ["Gauls", "Romans", "Teutons", "Egypt", "Huns"];

  // Populate the category dropdown with options
  const tribeDropdown = document.getElementById("tribeDropdown");
  tribes.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    tribeDropdown.add(optionElement);
  });

  // Populate the unit dropdown based on the selected category
  updateTribeUnitDropdown();
});

// Function to be called when the category dropdown selection changes
function updateFunctionality() {
  updateTribeUnitDropdown();
  updateResultMessage();
}

// Function to populate the unit dropdown based on the selected category
function updateTribeUnitDropdown() {
  const tribeDropdown = document.getElementById("tribeDropdown");
  const unitDropdown = document.getElementById("unitDropdown");
  const selectedTribe = tribeDropdown.value;

  // Clear existing options
  unitDropdown.innerHTML = "";

  // Populate the unit dropdown with options based on the selected category
  let units;
  if (selectedTribe == "Gauls") {
    units = gauls;
  } else if (selectedTribe == "Romans") {
    units = romans;
  } else if (selectedTribe == "Teutons") {
    units = teutons;
  } else if (selectedTribe == "Egypt") {
    units = egypt;
  } else {
    units = huns;
  }

  units.forEach((unit) => {
    const unitElement = document.createElement("option");
    unitElement.value = unit;
    unitElement.text = unit;
    unitDropdown.add(unitElement);
  });
}

// Function to add a new dropdown
function addDropdown() {
  const container = document.querySelector(".container");

  // Create a new dropdown
  const newDropdown = document.createElement("select");
  newDropdown.innerHTML = unitDropdown.innerHTML;

  // Create a new number input field
  const numberInput = document.createElement("input");
  numberInput.title = "Title";
  numberInput.type = "number";
  numberInput.placeholder = "Count";

  // Create five new fields for displaying information
  const infoFields = [];

  for (let i = 1; i <= 5; i++) {
    const infoField = document.createElement("div");
    infoFields.push(infoField);
  }
  infoFields[0].textContent = `Wood: ${0}`;
  infoFields[1].textContent = `Clay: ${0}`;
  infoFields[2].textContent = `Iron: ${0}`;
  infoFields[3].textContent = `Wheat: ${0}`;
  infoFields[4].textContent = `Total: ${0}`;

  // Append the new elements to the container
  container.insertBefore(newDropdown, document.querySelector("button"));
  container.insertBefore(numberInput, document.querySelector("button"));
  infoFields.forEach((field) =>
    container.insertBefore(field, document.querySelector("button"))
  );

  //calculateSum();
}

function calculateSum() {
  const unitDropdown = document.getElementById("unitDropdown");
  const numberInput = document.getElementById("numberInput");
  const sumResult = document.getElementById("sumResult");

  const selectedUnit = unitDropdown.value;
  const mult = parseInt(numberInput.value);

  if (!isNaN(mult)) {
    //console.log(`gaulsTest.${selectedUnit}[0].Wood`);
    //console.log(gaulsTest.Phalanx);
    const sum = gaulsTest.Phalanx[0].Wood * mult;
    sumResult.textContent = `Sum Result: ${sum}`;
  } else {
    sumResult.textContent = "Please enter a valid number.";
  }
}

// Function to update the result message
function updateResultMessage() {
  const selectedTribe = document.getElementById("tribeDropdown").value;
  const selectedUnit = document.getElementById("unitDropdown").value;
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Selected category: ${selectedTribe}, Selected unit: ${selectedUnit}. Other functionalities will be influenced accordingly.`;
  // You can add additional functionality based on the selected category and unit here
}
