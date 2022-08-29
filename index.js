/*
1 meter = 3.281 feet
1 foot = 0.3048 meters
-------------------------------
1 liter = 0.264 gallon
1 gallon = 3.78541 liters
-------------------------------
1 kilogram = 2.204 pound
1 pound = 0.453592 kilograms
*/

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function () {
  let number = document.querySelector("input").value;

  if (isNaN(number)) {
    alert("You must insert a number!!!");
  } else {
    lengthEl.textContent = `${number} meters = ${
      Math.round(number * 3.281 * 100) / 100
    } feet | ${number} feet = ${
      Math.round(number * 0.3048 * 100) / 100
    } meters`;
    //-------------------------------------------------
    volumeEl.textContent = `${number} liters = ${
      Math.round(number * 0.264 * 100) / 100
    } gallons | ${number} gallons = ${
      Math.round(number * 3.78541 * 100) / 100
    } liters`;
    //-------------------------------------------------
    massEl.textContent = `${number} kilos = ${
      Math.round(number * 2.204 * 100) / 100
    } pounds | ${number} pounds = ${
      Math.round(number * 0.453592 * 100) / 100
    } kilos`;
  }
});
