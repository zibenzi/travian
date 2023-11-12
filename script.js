// Sample units array
const units = [
  { values: [1, 2, 3], levels: ["Low", "Medium", "High"], counts: [1, 2, 3] },
  { values: [4, 5, 6], levels: ["Low", "Medium", "High"], counts: [1, 2, 3] },
];

// Function to populate dropdowns
function populateDropdown(container, unit) {
  const valueDropdown = document.createElement("select");
  valueDropdown.className = "unit-dropdown";
  unit.values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.text = value;
    valueDropdown.add(option);
  });

  const levelDropdown = document.createElement("select");
  levelDropdown.className = "level-dropdown";
  unit.levels.forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.text = level;
    levelDropdown.add(option);
  });

  const countDropdown = document.createElement("select");
  countDropdown.className = "count-dropdown";
  unit.counts.forEach((count) => {
    const option = document.createElement("option");
    option.value = count;
    option.text = count;
    countDropdown.add(option);
  });

  container.appendChild(valueDropdown);
  container.appendChild(levelDropdown);
  container.appendChild(countDropdown);
}

// Function to add a new dropdown
function addDropdown() {
  const container = document.getElementById("dropdown-container");

  // Create a new dropdown div
  const newDropdown = document.createElement("div");

  // Create a new label
  const label = document.createElement("label");
  label.textContent = `Select Unit ${container.childElementCount + 1}:`;

  // Populate the new dropdown with options
  populateDropdown(newDropdown, units[0]); // Use units[0] for the first dropdown

  // Append the label and dropdown elements to the new dropdown div
  newDropdown.appendChild(label);

  // Append the new dropdown div to the container
  container.appendChild(newDropdown);
}

// Populate initial dropdown on page load
document.addEventListener("DOMContentLoaded", function () {
  const initialDropdown = document.querySelector(".unit-dropdown");
  populateDropdown(initialDropdown, units[0]); // Use units[0] for the first dropdown
});

// Function to calculate and display result
function calculate() {
  // Get all dropdowns with class 'unit-dropdown'
  const dropdowns = document.querySelectorAll(".unit-dropdown");

  let total = 0;

  // Iterate through each dropdown and add up selected values
  dropdowns.forEach((dropdown) => {
    const selectedValue = parseFloat(dropdown.value) || 0;
    total += selectedValue;
  });

  // Display the result
  document.getElementById("result").innerText = `Result: ${total}`;
}
