document.addEventListener("DOMContentLoaded", function () {
  let tribeDropdown = document.getElementById("tribeDropdown");
  tribes.forEach((option) => {
    let optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    tribeDropdown.add(optionElement);
  });

});

function updateUnits(selector) {
  let tribe = selector.value;
  let unitsSection = document.getElementById("units");
  unitsSection.innerHTML = "";
  if (tribe.value == "-") {
    return;
  }

  data[tribe].units.forEach((unit) => {
    let unitElement = document.createElement("div");
    unitElement.classList.add("unit");
    let nameOfUnit = document.createElement("label");
    nameOfUnit.innerText = unit.name;
    let numberOfUnit = document.createElement("input");
    numberOfUnit.type = "number";
    numberOfUnit.placeholder = "count";
    numberOfUnit.value = 0;
    numberOfUnit.min = 0;
    numberOfUnit.id = unit.name + "-number";
    let materialList = document.createElement("ul");
    for (let i = 0; i < 4; i++) {
      let materialListItemField = document.createElement("li");
      materialListItemField.id = unit.name + "-" + materials[i];
      materialListItemField.innerText = materials[i] + ": " + unit.cost[materials[i]];
      materialList.appendChild(materialListItemField);
    }
    unitElement.appendChild(nameOfUnit);
    unitElement.appendChild(numberOfUnit);
    unitElement.appendChild(materialList);
    unitsSection.appendChild(unitElement);
  });
}

function calculateSum() {
  let tribe = document.getElementById("tribeDropdown").value;
  let total = [0, 0, 0, 0];

  data[tribe].units.forEach((unit) => {
    let numberOfUnit = document.getElementById(unit.name + "-number").value;
    for (let i = 0; i < 4; i++) {
      let value = document.getElementById(unit.name + "-" + materials[i]).innerText;
      let matches = value.match(/\d+/g);
      total[i] = total[i] + numberOfUnit * matches[0];
    }
  });
  document.getElementById("woodTotal").innerText = "Wood: " + total[0];
  document.getElementById("clayTotal").innerText = "Clay: " + total[1];
  document.getElementById("ironTotal").innerText = "Iron: " + total[2];
  document.getElementById("wheatTotal").innerText = "Wheat: " + total[3];
}